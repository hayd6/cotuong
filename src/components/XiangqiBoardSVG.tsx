import { motion } from 'motion/react';
import { ZoomIn, Sparkles } from 'lucide-react';
import type { LightboxImage } from './ImageLightbox';

export type PieceSide = 'red' | 'black';

export interface BoardPiece {
  /** Column index 0..8 (left to right) */
  col: number;
  /** Row index 0..9 (top to bottom) */
  row: number;
  side: PieceSide;
  char: string;
  highlight?: boolean;
}

export interface BoardArrow {
  fromCol: number;
  fromRow: number;
  toCol: number;
  toRow: number;
  color?: string;
  label?: string;
}

export interface XiangqiBoardPreset {
  id: string;
  title: string;
  subtitle?: string;
  evalBadge?: string;
  evalColor?: string;
  pieces: BoardPiece[];
  arrows?: BoardArrow[];
  originalImage?: LightboxImage;
}

/**
 * Exact board presets mapped directly from FILE-1.docx & FILE-3.docx figures.
 */
export const BOARD_PRESETS: Record<string, XiangqiBoardPreset> = {
  'hinh-2-1': {
    id: 'hinh-2-1',
    title: 'Hình 2.1 · Trung Pháo đối Bình phong Mã',
    subtitle: 'Giáo trình Cờ tướng (2026), tr. 105',
    pieces: [
      { col: 0, row: 0, side: 'black', char: '車' },
      { col: 2, row: 0, side: 'black', char: '象' },
      { col: 3, row: 0, side: 'black', char: '士' },
      { col: 4, row: 0, side: 'black', char: '將' },
      { col: 5, row: 0, side: 'black', char: '士' },
      { col: 6, row: 0, side: 'black', char: '象' },
      { col: 8, row: 0, side: 'black', char: '車' },
      { col: 1, row: 2, side: 'black', char: '砲' },
      { col: 2, row: 2, side: 'black', char: '馬' },
      { col: 6, row: 2, side: 'black', char: '馬' },
      { col: 7, row: 2, side: 'black', char: '砲' },
      { col: 0, row: 3, side: 'black', char: '卒' },
      { col: 2, row: 3, side: 'black', char: '卒' },
      { col: 4, row: 3, side: 'black', char: '卒' },
      { col: 6, row: 3, side: 'black', char: '卒' },
      { col: 8, row: 3, side: 'black', char: '卒' },
      { col: 0, row: 6, side: 'red', char: '兵' },
      { col: 2, row: 6, side: 'red', char: '兵' },
      { col: 4, row: 6, side: 'red', char: '兵' },
      { col: 6, row: 6, side: 'red', char: '兵' },
      { col: 8, row: 6, side: 'red', char: '兵' },
      { col: 1, row: 7, side: 'red', char: '炮' },
      { col: 4, row: 7, side: 'red', char: '炮' },
      { col: 6, row: 7, side: 'red', char: '馬', highlight: true },
      { col: 0, row: 9, side: 'red', char: '車' },
      { col: 1, row: 9, side: 'red', char: '馬' },
      { col: 2, row: 9, side: 'red', char: '相' },
      { col: 3, row: 9, side: 'red', char: '仕' },
      { col: 4, row: 9, side: 'red', char: '帥' },
      { col: 5, row: 9, side: 'red', char: '仕' },
      { col: 6, row: 9, side: 'red', char: '相' },
      { col: 8, row: 9, side: 'red', char: '車' },
    ],
    originalImage: {
      src: 'images/hinh-2-1-trung-phao-binh-phong-ma.png',
      caption: 'Hình 2.1: Khai cuộc Trung Pháo đối Bình phong Mã',
      source: 'Giáo trình Cờ tướng (2026), tr. 105',
    },
  },
  'hinh-2-2': {
    id: 'hinh-2-2',
    title: 'Hình 2.2 · Pháo đầu đối Bình phong Mã tiến tam Binh',
    subtitle: 'Giáo trình Cờ tướng (2026), tr. 106',
    pieces: [
      { col: 0, row: 0, side: 'black', char: '車' },
      { col: 2, row: 0, side: 'black', char: '象' },
      { col: 3, row: 0, side: 'black', char: '士' },
      { col: 4, row: 0, side: 'black', char: '將' },
      { col: 5, row: 0, side: 'black', char: '士' },
      { col: 6, row: 0, side: 'black', char: '象' },
      { col: 7, row: 0, side: 'black', char: '車' },
      { col: 1, row: 2, side: 'black', char: '砲' },
      { col: 2, row: 2, side: 'black', char: '馬' },
      { col: 6, row: 2, side: 'black', char: '馬' },
      { col: 7, row: 2, side: 'black', char: '砲' },
      { col: 0, row: 3, side: 'black', char: '卒' },
      { col: 4, row: 3, side: 'black', char: '卒' },
      { col: 6, row: 3, side: 'black', char: '卒' },
      { col: 8, row: 3, side: 'black', char: '卒' },
      { col: 2, row: 4, side: 'black', char: '卒', highlight: true },
      { col: 6, row: 5, side: 'red', char: '兵', highlight: true },
      { col: 0, row: 6, side: 'red', char: '兵' },
      { col: 2, row: 6, side: 'red', char: '兵' },
      { col: 4, row: 6, side: 'red', char: '兵' },
      { col: 8, row: 6, side: 'red', char: '兵' },
      { col: 1, row: 7, side: 'red', char: '炮' },
      { col: 4, row: 7, side: 'red', char: '炮' },
      { col: 6, row: 7, side: 'red', char: '馬' },
      { col: 0, row: 9, side: 'red', char: '車' },
      { col: 1, row: 9, side: 'red', char: '馬' },
      { col: 2, row: 9, side: 'red', char: '相' },
      { col: 3, row: 9, side: 'red', char: '仕' },
      { col: 4, row: 9, side: 'red', char: '帥' },
      { col: 5, row: 9, side: 'red', char: '仕' },
      { col: 6, row: 9, side: 'red', char: '相' },
      { col: 7, row: 9, side: 'red', char: '車' },
    ],
    arrows: [
      { fromCol: 6, fromRow: 6, toCol: 6, toRow: 5, color: '#B92B27', label: 'B3.1' },
      { fromCol: 2, fromRow: 3, toCol: 2, toRow: 4, color: '#1D4ED8', label: 'T3.1' },
    ],
    originalImage: {
      src: 'images/hinh-2-2-binh-phong-ma-tien-tam-binh.png',
      caption: 'Hình 2.2: Khai cuộc Trung Pháo đối Bình phong Mã tiến tam Binh',
      source: 'Giáo trình Cờ tướng (2026), tr. 106',
    },
  },
  'hinh-2-3': {
    id: 'hinh-2-3',
    title: 'Hình 2.3 · AI gợi ý nước Xe 1 bình 2',
    subtitle: 'Xiangqi.com · Engine Pikafish',
    evalBadge: 'Depth 30 · Eval +68',
    evalColor: '#15805D',
    pieces: [
      { col: 0, row: 0, side: 'black', char: '車' },
      { col: 2, row: 0, side: 'black', char: '象' },
      { col: 3, row: '0' as unknown as number, side: 'black', char: '士' },
      { col: 4, row: 0, side: 'black', char: '將' },
      { col: 5, row: 0, side: 'black', char: '士' },
      { col: 6, row: 0, side: 'black', char: '象' },
      { col: 8, row: 0, side: 'black', char: '車' },
      { col: 1, row: 2, side: 'black', char: '砲' },
      { col: 2, row: 2, side: 'black', char: '馬' },
      { col: 6, row: 2, side: 'black', char: '馬' },
      { col: 7, row: 2, side: 'black', char: '砲' },
      { col: 0, row: 3, side: 'black', char: '卒' },
      { col: 4, row: 3, side: 'black', char: '卒' },
      { col: 6, row: 3, side: 'black', char: '卒' },
      { col: 8, row: 3, side: 'black', char: '卒' },
      { col: 2, row: 4, side: 'black', char: '卒' },
      { col: 6, row: 5, side: 'red', char: '兵' },
      { col: 0, row: 6, side: 'red', char: '兵' },
      { col: 2, row: 6, side: 'red', char: '兵' },
      { col: 4, row: 6, side: 'red', char: '兵' },
      { col: 8, row: 6, side: 'red', char: '兵' },
      { col: 1, row: 7, side: 'red', char: '炮' },
      { col: 4, row: 7, side: 'red', char: '炮' },
      { col: 6, row: 7, side: 'red', char: '馬' },
      { col: 0, row: 9, side: 'red', char: '車' },
      { col: 1, row: 9, side: 'red', char: '馬' },
      { col: 2, row: 9, side: 'red', char: '相' },
      { col: 3, row: 9, side: 'red', char: '仕' },
      { col: 4, row: 9, side: 'red', char: '帥' },
      { col: 5, row: 9, side: 'red', char: '仕' },
      { col: 6, row: 9, side: 'red', char: '相' },
      { col: 8, row: 9, side: 'red', char: '車', highlight: true },
    ],
    arrows: [
      { fromCol: 8, fromRow: 9, toCol: 7, toRow: 9, color: '#15805D', label: 'X1-2 (Tốt nhất)' },
    ],
    originalImage: {
      src: 'images/hinh-2-3-xiangqicom-xe1-binh2.png',
      caption: 'Hình 2.3: Xiangqi.com (Depth 30, Eval +68) gợi ý Xe 1 bình 2',
      source: 'Thực nghiệm trên nền tảng Xiangqi.com',
    },
  },
  'hinh-2-4': {
    id: 'hinh-2-4',
    title: 'Hình 2.4 · Khởi Binh cuộc (Tiên nhân chỉ lộ)',
    subtitle: 'Giáo trình Cờ tướng (2026), tr. 118',
    pieces: [
      { col: 0, row: 0, side: 'black', char: '車' },
      { col: 1, row: 0, side: 'black', char: '馬' },
      { col: 2, row: 0, side: 'black', char: '象' },
      { col: 3, row: 0, side: 'black', char: '士' },
      { col: 4, row: 0, side: 'black', char: '將' },
      { col: 5, row: 0, side: 'black', char: '士' },
      { col: 6, row: 0, side: 'black', char: '象' },
      { col: 7, row: 0, side: 'black', char: '馬' },
      { col: 8, row: 0, side: 'black', char: '車' },
      { col: 1, row: 2, side: 'black', char: '砲' },
      { col: 7, row: 2, side: 'black', char: '砲' },
      { col: 0, row: 3, side: 'black', char: '卒' },
      { col: 2, row: 3, side: 'black', char: '卒' },
      { col: 4, row: 3, side: 'black', char: '卒' },
      { col: 6, row: 3, side: 'black', char: '卒' },
      { col: 8, row: 3, side: 'black', char: '卒' },
      { col: 2, row: 5, side: 'red', char: '兵', highlight: true },
      { col: 0, row: 6, side: 'red', char: '兵' },
      { col: 4, row: 6, side: 'red', char: '兵' },
      { col: 6, row: 6, side: 'red', char: '兵' },
      { col: 8, row: 6, side: 'red', char: '兵' },
      { col: 1, row: 7, side: 'red', char: '炮' },
      { col: 7, row: 7, side: 'red', char: '炮' },
      { col: 0, row: 9, side: 'red', char: '車' },
      { col: 1, row: 9, side: 'red', char: '馬' },
      { col: 2, row: 9, side: 'red', char: '相' },
      { col: 3, row: 9, side: 'red', char: '仕' },
      { col: 4, row: 9, side: 'red', char: '帥' },
      { col: 5, row: 9, side: 'red', char: '仕' },
      { col: 6, row: 9, side: 'red', char: '相' },
      { col: 7, row: 9, side: 'red', char: '馬' },
      { col: 8, row: 9, side: 'red', char: '車' },
    ],
    arrows: [
      { fromCol: 2, fromRow: 6, toCol: 2, toRow: 5, color: '#B92B27', label: 'B7.1' },
    ],
    originalImage: {
      src: 'images/hinh-2-4-tien-nhan-chi-lo.png',
      caption: 'Hình 2.4: Khởi Binh cuộc (Tiên nhân chỉ lộ)',
      source: 'Giáo trình Cờ tướng (2026), tr. 118',
    },
  },
  'hinh-2-5': {
    id: 'hinh-2-5',
    title: 'Hình 2.5 · Xiangqi.com đề xuất Pháo 2 bình 5',
    subtitle: 'Trị số đánh giá tăng +86',
    evalBadge: 'Eval +86 · Pháo đầu',
    evalColor: '#15805D',
    pieces: [
      { col: 0, row: 0, side: 'black', char: '車' },
      { col: 1, row: 0, side: 'black', char: '馬' },
      { col: 2, row: 0, side: 'black', char: '象' },
      { col: 3, row: 0, side: 'black', char: '士' },
      { col: 4, row: 0, side: 'black', char: '將' },
      { col: 5, row: 0, side: 'black', char: '士' },
      { col: 6, row: 0, side: 'black', char: '象' },
      { col: 7, row: 0, side: 'black', char: '馬' },
      { col: 8, row: 0, side: 'black', char: '車' },
      { col: 2, row: 2, side: 'black', char: '砲' },
      { col: 7, row: 2, side: 'black', char: '砲' },
      { col: 0, row: 3, side: 'black', char: '卒' },
      { col: 2, row: 3, side: 'black', char: '卒' },
      { col: 4, row: 3, side: 'black', char: '卒' },
      { col: 6, row: 3, side: 'black', char: '卒' },
      { col: 8, row: 3, side: 'black', char: '卒' },
      { col: 2, row: 5, side: 'red', char: '兵' },
      { col: 0, row: 6, side: 'red', char: '兵' },
      { col: 4, row: 6, side: 'red', char: '兵' },
      { col: 6, row: 6, side: 'red', char: '兵' },
      { col: 8, row: 6, side: 'red', char: '兵' },
      { col: 1, row: 7, side: 'red', char: '炮' },
      { col: 7, row: 7, side: 'red', char: '炮', highlight: true },
      { col: 0, row: 9, side: 'red', char: '車' },
      { col: 1, row: 9, side: 'red', char: '馬' },
      { col: 2, row: 9, side: 'red', char: '相' },
      { col: 3, row: 9, side: 'red', char: '仕' },
      { col: 4, row: 9, side: 'red', char: '帥' },
      { col: 5, row: 9, side: 'red', char: '仕' },
      { col: 6, row: 9, side: 'red', char: '相' },
      { col: 7, row: 9, side: 'red', char: '馬' },
      { col: 8, row: 9, side: 'red', char: '車' },
    ],
    arrows: [
      { fromCol: 7, fromRow: 7, toCol: 4, toRow: 7, color: '#15805D', label: 'P2-5 (+86)' },
    ],
    originalImage: {
      src: 'images/hinh-2-5-xiangqicom-phao2-binh5.png',
      caption: 'Hình 2.5: Giao diện Xiangqi.com đề xuất Pháo 2 bình 5 (Eval +86)',
      source: 'Thực nghiệm trên nền tảng Xiangqi.com',
    },
  },
  'hinh-2-6': {
    id: 'hinh-2-6',
    title: 'Hình 2.6 · Trung cuộc tranh tiên (trước phân tích)',
    subtitle: 'Xe Đỏ qua hà lộ 4 áp sát Mã Đen lộ 6 không quân bảo vệ',
    pieces: [
      { col: 0, row: 0, side: 'black', char: '車' },
      { col: 3, row: 0, side: 'black', char: '士' },
      { col: 4, row: 0, side: 'black', char: '將' },
      { col: 5, row: 0, side: 'black', char: '士' },
      { col: 6, row: 0, side: 'black', char: '象' },
      { col: 7, row: 0, side: 'black', char: '車' },
      { col: 2, row: 2, side: 'black', char: '馬' },
      { col: 4, row: 2, side: 'black', char: '象' },
      { col: 7, row: 2, side: 'black', char: '砲' },
      { col: 0, row: 3, side: 'black', char: '卒' },
      { col: 1, row: 3, side: 'black', char: '砲' },
      { col: 2, row: 3, side: 'black', char: '卒' },
      { col: 4, row: 3, side: 'black', char: '卒' },
      { col: 5, row: 3, side: 'red', char: '車', highlight: true },
      { col: 8, row: 3, side: 'black', char: '卒' },
      { col: 5, row: 4, side: 'black', char: '馬', highlight: true },
      { col: 6, row: 4, side: 'black', char: '卒' },
      { col: 2, row: 5, side: 'red', char: '兵' },
      { col: 0, row: 6, side: 'red', char: '兵' },
      { col: 1, row: 7, side: 'red', char: '炮' },
      { col: 4, row: 6, side: 'red', char: '兵' },
      { col: 6, row: 6, side: 'red', char: '兵' },
      { col: 8, row: 6, side: 'red', char: '兵' },
      { col: 2, row: 8, side: 'red', char: '馬' },
      { col: 4, row: 8, side: 'red', char: '炮' },
      { col: 6, row: 8, side: 'red', char: '馬' },
      { col: 0, row: 9, side: 'red', char: '車' },
      { col: 2, row: 9, side: 'red', char: '相' },
      { col: 3, row: 9, side: 'red', char: '仕' },
      { col: 4, row: 9, side: 'red', char: '帥' },
      { col: 5, row: 9, side: 'red', char: '仕' },
      { col: 6, row: 9, side: 'red', char: '相' },
    ],
    originalImage: {
      src: 'images/hinh-2-6-trung-cuoc-tranh-tien.png',
      caption: 'Hình 2.6: Tình huống trung cuộc tranh tiên (trước phân tích)',
      source: 'Giáo trình Cờ tướng & Tài liệu nghiên cứu',
    },
  },
  'hinh-2-7': {
    id: 'hinh-2-7',
    title: 'Hình 2.7 · Trung cuộc tranh tiên — Xe 4 thoái 1',
    subtitle: 'Tránh phế Mã vô ích · Chuyển từ cân bằng sang ưu thế +690',
    evalBadge: 'Eval +690 · Ưu thế quyết định',
    evalColor: '#15805D',
    pieces: [
      { col: 0, row: 0, side: 'black', char: '車' },
      { col: 3, row: 0, side: 'black', char: '士' },
      { col: 4, row: 0, side: 'black', char: '將' },
      { col: 5, row: 0, side: 'black', char: '士' },
      { col: 6, row: 0, side: 'black', char: '象' },
      { col: 7, row: 0, side: 'black', char: '車' },
      { col: 2, row: 2, side: 'black', char: '馬' },
      { col: 4, row: 2, side: 'black', char: '象' },
      { col: 7, row: 2, side: 'black', char: '砲' },
      { col: 0, row: 3, side: 'black', char: '卒' },
      { col: 1, row: 3, side: 'black', char: '砲' },
      { col: 2, row: 3, side: 'black', char: '卒' },
      { col: 4, row: 3, side: 'black', char: '卒' },
      { col: 5, row: 3, side: 'red', char: '車', highlight: true },
      { col: 8, row: 3, side: 'black', char: '卒' },
      { col: 5, row: 4, side: 'black', char: '馬' },
      { col: 6, row: 4, side: 'black', char: '卒' },
      { col: 2, row: 5, side: 'red', char: '兵' },
      { col: 0, row: 6, side: 'red', char: '兵' },
      { col: 4, row: 6, side: 'red', char: '兵' },
      { col: 6, row: 6, side: 'red', char: '兵' },
      { col: 8, row: 6, side: 'red', char: '兵' },
      { col: 1, row: 7, side: 'red', char: '炮' },
      { col: 2, row: 8, side: 'red', char: '馬' },
      { col: 4, row: 8, side: 'red', char: '炮' },
      { col: 6, row: 8, side: 'red', char: '馬' },
      { col: 0, row: 9, side: 'red', char: '車' },
      { col: 2, row: 9, side: 'red', char: '相' },
      { col: 3, row: 9, side: 'red', char: '仕' },
      { col: 4, row: 9, side: 'red', char: '帥' },
      { col: 5, row: 9, side: 'red', char: '仕' },
      { col: 6, row: 9, side: 'red', char: '相' },
    ],
    arrows: [
      { fromCol: 5, fromRow: 3, toCol: 5, toRow: 4, color: '#15805D', label: 'X4/1 (+690)' },
    ],
    originalImage: {
      src: 'images/hinh-2-7-xiangqicom-xe4-thoai1.png',
      caption: 'Hình 2.7: AI đề xuất Xe 4 thoái 1 (Eval +690)',
      source: 'Thực nghiệm trên Xiangqi.com',
    },
  },
  'tan-cuoc-xe-phao': {
    id: 'tan-cuoc-xe-phao',
    title: 'Thế cờ: Xe Pháo chiếm trung thắng Xe Chốt',
    subtitle: 'Sách: 8 nước (1. X9-5 X4/2 ...) · AI: X4.5, Tg5.1, P4.1',
    evalBadge: 'Xe Pháo vs Xe Chốt',
    evalColor: '#B92B27',
    pieces: [
      { col: 3, row: 0, side: 'black', char: '將' },
      { col: 5, row: 2, side: 'red', char: '炮', highlight: true },
      { col: 5, row: 4, side: 'black', char: '車' },
      { col: 0, row: 6, side: 'red', char: '車', highlight: true },
      { col: 8, row: 6, side: 'black', char: '卒' },
      { col: 4, row: 9, side: 'red', char: '帥' },
    ],
    arrows: [
      { fromCol: 0, fromRow: 6, toCol: 4, toRow: 6, color: '#B92B27', label: '1. X9-5 (Sách)' },
      { fromCol: 5, fromRow: 2, toCol: 5, toRow: 1, color: '#15805D', label: 'P4.1 (AI)' },
    ],
    originalImage: {
      src: 'images/tan-cuoc-xe-phao-chiem-trung-sach.png',
      caption: 'Tàn cuộc Xe Pháo chiếm trung thắng Xe Chốt',
      source: 'Giáo trình Cờ tướng & Tài liệu chuyên khảo',
    },
  },
  'tieu-xa-ma': {
    id: 'tieu-xa-ma',
    title: 'Cờ thế kinh điển · Thế Tiểu Xa Mã',
    subtitle: 'Sách: 5 nước thắng · Pikafish ChessDB: Đỏ chiếu bí sau 27 nước',
    evalBadge: 'Đỏ thắng ép chiếu bí',
    evalColor: '#B92B27',
    pieces: [
      { col: 4, row: 0, side: 'black', char: '將' },
      { col: 1, row: 4, side: 'black', char: '砲' },
      { col: 3, row: 8, side: 'black', char: '卒' },
      { col: 5, row: 8, side: 'black', char: '車' },
      { col: 5, row: 1, side: 'red', char: '車', highlight: true },
      { col: 5, row: 2, side: 'red', char: '兵' },
      { col: 6, row: 2, side: 'red', char: '馬' },
      { col: 4, row: 6, side: 'red', char: '兵' },
      { col: 6, row: 6, side: 'red', char: '炮' },
      { col: 4, row: 9, side: 'red', char: '帥' },
    ],
    arrows: [
      { fromCol: 5, fromRow: 1, toCol: 5, toRow: 0, color: '#B92B27', label: 'Thí Xe ép Tướng' },
    ],
    originalImage: {
      src: 'images/co-the-tieu-xa-ma-sach.png',
      caption: 'Thế cờ Tiểu Xa Mã trong sách giáo trình & tài liệu cổ',
      source: 'Tài liệu nghiên cứu Cờ tướng',
    },
  },
};

// Fix hinh-2-3 accidental string row '0' cleanly:
BOARD_PRESETS['hinh-2-3'].pieces[2].row = 0;

interface XiangqiBoardSVGProps {
  presetId: keyof typeof BOARD_PRESETS;
  onZoom?: (img: LightboxImage) => void;
  compact?: boolean;
  className?: string;
}

export function XiangqiBoardSVG({
  presetId,
  onZoom,
  compact = false,
  className = '',
}: XiangqiBoardSVGProps) {
  const preset = BOARD_PRESETS[presetId] ?? BOARD_PRESETS['hinh-2-1'];
  const ox = 44;
  const oy = 40;
  const dx = 42;
  const dy = 40;
  const x = (c: number) => ox + c * dx;
  const y = (r: number) => oy + r * dy;

  return (
    <div className={`relative flex h-full flex-col justify-between ${className}`}>
      {/* Header pill directly integrated over warm wood */}
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-base font-extrabold leading-tight text-[#1A1714]">
            {preset.title}
          </div>
          {preset.subtitle && (
            <div className="text-xs font-semibold text-[#6E655A]">{preset.subtitle}</div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {preset.evalBadge && (
            <span
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 font-mono-tech text-xs font-extrabold text-white shadow-xs"
              style={{ backgroundColor: preset.evalColor || '#15805D' }}
            >
              <Sparkles className="h-3 w-3" />
              {preset.evalBadge}
            </span>
          )}
          {preset.originalImage && onZoom && (
            <button
              type="button"
              onClick={() => onZoom(preset.originalImage!)}
              className="inline-flex items-center gap-1 rounded-full border border-[#DFD4C1] bg-white px-3 py-1 text-xs font-bold text-[#1A1714] shadow-xs transition hover:border-[#B92B27] hover:text-[#B92B27]"
              title="Xem ảnh gốc từ tài liệu"
            >
              <ZoomIn className="h-3.5 w-3.5" />
              <span>Ảnh gốc</span>
            </button>
          )}
        </div>
      </div>

      {/* Crisp museum SVG board */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        <svg
          viewBox="0 0 424 440"
          className={`h-full w-auto max-w-full select-none drop-shadow-[0_18px_36px_rgba(92,62,24,0.14)] ${
            compact ? 'max-h-[420px]' : 'max-h-[540px]'
          }`}
        >
          <defs>
            <linearGradient id={`wood-${preset.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF0DC" />
              <stop offset="100%" stopColor="#EFE0C2" />
            </linearGradient>
            <linearGradient id={`redPiece-${preset.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D63B36" />
              <stop offset="100%" stopColor="#A6221E" />
            </linearGradient>
            <linearGradient id={`blackPiece-${preset.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2E2A26" />
              <stop offset="100%" stopColor="#141210" />
            </linearGradient>
            <marker
              id={`arrow-emerald-${preset.id}`}
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#15805D" />
            </marker>
            <marker
              id={`arrow-cinnabar-${preset.id}`}
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#B92B27" />
            </marker>
            <marker
              id={`arrow-blue-${preset.id}`}
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#1D4ED8" />
            </marker>
          </defs>

          {/* Outer wood bezel */}
          <rect
            x="16"
            y="14"
            width="392"
            height="412"
            rx="16"
            fill={`url(#wood-${preset.id})`}
            stroke="#9C6F34"
            strokeWidth="2.5"
          />
          <rect
            x="24"
            y="22"
            width="376"
            height="396"
            rx="10"
            fill="none"
            stroke="#B6832C"
            strokeOpacity="0.35"
            strokeWidth="1"
          />

          {/* File labels */}
          {Array.from({ length: 9 }).map((_, c) => (
            <g key={`lbl-${c}`}>
              <text
                x={x(c)}
                y={30}
                textAnchor="middle"
                fill="#7D6A52"
                fontSize="10"
                className="font-mono-tech font-bold"
              >
                {c + 1}
              </text>
              <text
                x={x(c)}
                y={419}
                textAnchor="middle"
                fill="#7D6A52"
                fontSize="10"
                className="font-mono-tech font-bold"
              >
                {9 - c}
              </text>
            </g>
          ))}

          {/* Ranks */}
          {Array.from({ length: 10 }).map((_, r) => (
            <line
              key={`r-${r}`}
              x1={x(0)}
              y1={y(r)}
              x2={x(8)}
              y2={y(r)}
              stroke="#7A562C"
              strokeOpacity="0.65"
              strokeWidth={r === 0 || r === 9 ? '1.8' : '1.2'}
            />
          ))}

          {/* Files broken across River */}
          {Array.from({ length: 9 }).map((_, c) =>
            c === 0 || c === 8 ? (
              <line
                key={`c-${c}`}
                x1={x(c)}
                y1={y(0)}
                x2={x(c)}
                y2={y(9)}
                stroke="#7A562C"
                strokeOpacity="0.72"
                strokeWidth="1.8"
              />
            ) : (
              <g key={`c-${c}`}>
                <line
                  x1={x(c)}
                  y1={y(0)}
                  x2={x(c)}
                  y2={y(4)}
                  stroke="#7A562C"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                />
                <line
                  x1={x(c)}
                  y1={y(5)}
                  x2={x(c)}
                  y2={y(9)}
                  stroke="#7A562C"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                />
              </g>
            )
          )}

          {/* Palaces */}
          <line x1={x(3)} y1={y(0)} x2={x(5)} y2={y(2)} stroke="#7A562C" strokeOpacity="0.6" strokeWidth="1.2" />
          <line x1={x(5)} y1={y(0)} x2={x(3)} y2={y(2)} stroke="#7A562C" strokeOpacity="0.6" strokeWidth="1.2" />
          <line x1={x(3)} y1={y(7)} x2={x(5)} y2={y(9)} stroke="#7A562C" strokeOpacity="0.6" strokeWidth="1.2" />
          <line x1={x(5)} y1={y(7)} x2={x(3)} y2={y(9)} stroke="#7A562C" strokeOpacity="0.6" strokeWidth="1.2" />

          {/* River lettering */}
          <text
            x={x(4)}
            y={y(4.56)}
            textAnchor="middle"
            fill="#8D6430"
            fillOpacity="0.72"
            fontSize="16"
            fontFamily="serif"
            letterSpacing="12"
          >
            楚河 · 漢界
          </text>

          {/* Pieces */}
          {preset.pieces.map((p, idx) => {
            const cx = x(p.col);
            const cy = y(p.row);
            const isRed = p.side === 'red';
            return (
              <motion.g
                key={`${p.col}-${p.row}-${p.char}-${idx}`}
                initial={{ scale: 0.72, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: idx * 0.014 }}
              >
                {p.highlight && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r="20.5"
                    fill="none"
                    stroke={isRed ? '#B92B27' : '#15805D'}
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                  />
                )}
                {/* Soft drop shadow */}
                <circle cx={cx + 1} cy={cy + 2.2} r="16.5" fill="rgba(26,23,20,0.22)" />
                {/* Carved ivory piece outer body */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="16.5"
                  fill="#FFF9EE"
                  stroke={isRed ? '#B92B27' : '#2E2A26'}
                  strokeWidth="1.6"
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r="13.5"
                  fill={isRed ? `url(#redPiece-${preset.id})` : `url(#blackPiece-${preset.id})`}
                />
                <text
                  x={cx}
                  y={cy + 5.5}
                  textAnchor="middle"
                  fill="#FFFBF2"
                  fontSize="15.5"
                  fontWeight="700"
                  fontFamily="serif"
                >
                  {p.char}
                </text>
              </motion.g>
            );
          })}

          {/* Animated tactical AI move arrows overlaid above pieces */}
          {preset.arrows?.map((arr, idx) => {
            const color = arr.color || '#15805D';
            const markerId =
              color === '#B92B27'
                ? `url(#arrow-cinnabar-${preset.id})`
                : color === '#1D4ED8'
                ? `url(#arrow-blue-${preset.id})`
                : `url(#arrow-emerald-${preset.id})`;
            return (
              <g key={`arr-${idx}`}>
                <motion.line
                  x1={x(arr.fromCol)}
                  y1={y(arr.fromRow)}
                  x2={x(arr.toCol)}
                  y2={y(arr.toRow)}
                  stroke={color}
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeOpacity="0.92"
                  markerEnd={markerId}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.65, delay: 0.35 + idx * 0.15 }}
                />
                {arr.label && (
                  <g
                    transform={`translate(${(x(arr.fromCol) + x(arr.toCol)) / 2}, ${
                      (y(arr.fromRow) + y(arr.toRow)) / 2 - 14
                    })`}
                  >
                    <rect
                      x="-40"
                      y="-10"
                      width="80"
                      height="18"
                      rx="9"
                      fill="#FFFFFF"
                      stroke={color}
                      strokeWidth="1.2"
                    />
                    <text
                      x="0"
                      y="2.5"
                      textAnchor="middle"
                      fill={color}
                      fontSize="9"
                      fontWeight="800"
                      className="font-mono-tech"
                    >
                      {arr.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
