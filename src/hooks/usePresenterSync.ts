import { useCallback, useEffect, useRef } from 'react';

const CHANNEL_NAME = 'cotuong-ai-presentation-sync-v1';
const STORAGE_KEY = 'cotuong-ai-slide-sync';

interface SyncMessage {
  type: 'SLIDE_CHANGE';
  slideIndex: number;
  senderId: string;
  ts: number;
}

export function usePresenterSync(
  currentIndex: number,
  onRemoteSlideChange: (index: number) => void
) {
  const senderIdRef = useRef<string>(
    `win-${Math.random().toString(36).slice(2, 9)}`
  );
  const channelRef = useRef<BroadcastChannel | null>(null);
  const lastRemoteTsRef = useRef<number>(0);

  useEffect(() => {
    if (typeof BroadcastChannel !== 'undefined') {
      const ch = new BroadcastChannel(CHANNEL_NAME);
      channelRef.current = ch;
      ch.onmessage = (event: MessageEvent<SyncMessage>) => {
        const msg = event.data;
        if (
          msg &&
          msg.type === 'SLIDE_CHANGE' &&
          msg.senderId !== senderIdRef.current &&
          msg.ts > lastRemoteTsRef.current
        ) {
          lastRemoteTsRef.current = msg.ts;
          onRemoteSlideChange(msg.slideIndex);
        }
      };
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || !e.newValue) return;
      try {
        const msg = JSON.parse(e.newValue) as SyncMessage;
        if (
          msg.type === 'SLIDE_CHANGE' &&
          msg.senderId !== senderIdRef.current &&
          msg.ts > lastRemoteTsRef.current
        ) {
          lastRemoteTsRef.current = msg.ts;
          onRemoteSlideChange(msg.slideIndex);
        }
      } catch {
        // Ignore parse error
      }
    };

    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('storage', onStorage);
      channelRef.current?.close();
      channelRef.current = null;
    };
  }, [onRemoteSlideChange]);

  const broadcastSlide = useCallback((slideIndex: number) => {
    const payload: SyncMessage = {
      type: 'SLIDE_CHANGE',
      slideIndex,
      senderId: senderIdRef.current,
      ts: Date.now(),
    };
    try {
      channelRef.current?.postMessage(payload);
    } catch {
      // Ignore
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore
    }
  }, []);

  useEffect(() => {
    // Keep initial hash/sync clean without forcing loop
  }, [currentIndex]);

  return { broadcastSlide };
}
