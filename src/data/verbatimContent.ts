/**
 * NỘI DUNG HIỂN THỊ CHÍNH THỨC TRÊN SLIDE
 * - Chương 1 (Slides 2–11): Soạn trực tiếp từ kịch bản thuyết trình FILE-2 (Slide 01–10), đối chiếu chính xác FILE-1.
 * - Chương 2, 3, 4 (Slides 12–38): Giữ nguyên 100% câu chữ, số liệu, bảng biểu và thuật ngữ từ FILE-3.docx.
 * - Slide 1 (Mở đầu) & Slide 39 (Tổng kết): Trích lọc trung thực từ Phần Mở đầu và Phần Kết luận trong FILE-1.docx.
 */

export const COVER_CONTENT = {
  institution: 'TRƯỜNG ĐH CÔNG NGHỆ KỸ THUẬT TP. HCM',
  faculty: 'Trung Tâm Giáo dục Thể chất',
  courseClass: 'CHIN112330_06',
  subject: 'Cờ Tướng',
  title: 'CÁC ỨNG DỤNG TRÍ TUỆ NHÂN TẠO TRONG CỜ TƯỚNG',
  team: 'Nhóm 5',
  advisor: 'PGS. TS. Nguyễn Đức Thành',
  eyebrow: 'BÁO CÁO CHUYÊN ĐỀ HỌC PHẦN',
  subtitle:
    'Hệ thống hóa nền tảng công nghệ engine, phân tích thực tiễn theo từng giai đoạn ván cờ, thực nghiệm đối chiếu và định hướng ứng dụng hiệu quả.',
  pillars: [
    { code: 'CHƯƠNG 1', label: 'Cơ sở lý thuyết & Công nghệ AI' },
    { code: 'CHƯƠNG 2', label: 'Ứng dụng theo giai đoạn & hoạt động' },
    { code: 'CHƯƠNG 3', label: 'Công cụ AI hiện đại & Thực nghiệm' },
    { code: 'CHƯƠNG 4', label: 'Đánh giá, Hạn chế & Định hướng' },
  ],
};

export const CH1_SLIDES_CONTENT = {
  s2: {
    heading: 'Mở đầu: AI đánh Cờ tướng như thế nào?',
    lead: 'Con người nhìn thấy quân Xe, Pháo, Mã quen thuộc — máy tính xử lý trạng thái bàn cờ và dự đoán phản ứng đối kháng.',
    points: [
      {
        title: 'Hành trình phía sau một nước đi',
        body: 'Từ một bàn cờ cụ thể, AI khảo sát các diễn biến đối đáp để đi tới quyết định nước đi có triển vọng tốt nhất.',
      },
      {
        title: 'Khác biệt cốt lõi',
        body: 'AI không chỉ tìm một nước đi có vẻ mạnh, mà phải tính xem đối thủ sẽ đáp trả ra sao.',
      },
      {
        title: 'Khoảng cách sư phạm',
        body: 'Một cỗ máy tính toán rất giỏi vẫn chưa chắc giải thích cho người học thật dễ hiểu.',
      },
    ],
  },
  s3: {
    heading: 'Một nước đi, rất nhiều khả năng',
    stats: [
      { value: 90, label: 'Giao điểm bàn cờ' },
      { value: 32, label: 'Quân cờ xuất phát' },
      { value: 7, label: 'Loại quân di chuyển riêng biệt' },
    ],
    questions: [
      'Đen sẽ đỡ thế nào khi ta đưa Pháo lên?',
      'Nếu hai bên đổi quân thì ai lợi hơn?',
      'Nếu bỏ qua nước này, đối phương có đòn phản công không?',
    ],
    takeaway:
      'Một nước đi không bao giờ đứng riêng lẻ. Chuỗi câu hỏi nối tiếp buộc AI phải phân tích nhiều khả năng trước khi lựa chọn.',
  },
  s4: {
    heading: 'Trước khi suy nghĩ, AI phải hiểu bàn cờ',
    inputs: [
      'Vị trí từng quân cờ theo tọa độ trên bàn cờ',
      'Xác định bên nào đang đến lượt đi (Đỏ hay Đen)',
      'Các điều kiện ràng buộc liên quan đến luật cờ',
    ],
    rules: [
      { title: 'Cản chân Mã', desc: 'Quân Mã có thể bị cản chân tại vị trí liền kề theo hướng đi.' },
      { title: 'Pháo cần ngòi', desc: 'Quân Pháo bắt buộc phải có đúng một quân làm ngòi để ăn quân.' },
      { title: 'Tránh tự chiếu', desc: 'Loại bỏ những nước tưởng đi được nhưng khiến Tướng của mình bị chiếu.' },
    ],
    warning: 'Nguyên tắc tiên quyết: Dữ liệu bàn cờ đầu vào sai → toàn bộ phân tích phía sau cũng sai.',
  },
  s5: {
    heading: 'AI tính cả nước đi của đối thủ: Minimax',
    subtitle: 'Ví dụ minh họa giả định nguyên lý tối đa hóa (Đỏ) & tối thiểu hóa (Đen)',
    optionA: {
      label: 'Phương án A',
      outcomes: [3, 5],
      worstCase: 3,
      note: 'Ngay cả khi Đen phản ứng tốt nhất, Đỏ vẫn bảo đảm kết quả tối thiểu là 3.',
    },
    optionB: {
      label: 'Phương án B',
      outcomes: [2, 9],
      worstCase: 2,
      note: 'Con số 9 rất hấp dẫn, nhưng nếu Đen chơi tốt, họ sẽ đưa phương án B về 2.',
    },
    conclusion:
      'Tinh thần Minimax: AI chọn A (3 điểm) — không chỉ hỏi mình muốn làm gì, mà tính xem đối thủ có thể phá kế hoạch ra sao.',
  },
  s6: {
    heading: 'Nhanh hơn nhờ cắt tỉa Alpha–Beta',
    problem: 'Mở rộng mọi nhánh đến cùng khiến số vị trí phải xét tăng rất nhanh theo độ sâu.',
    mechanism:
      'Khi đã có đủ thông tin biết chắc một nhánh không thể tốt hơn phương án hiện tại, AI ngừng xét phần còn lại của nhánh ấy.',
    exampleNote:
      'Quay lại ví dụ: A đã bảo đảm 3 điểm. Khi xét B và thấy Đen kéo được xuống 2, AI cắt bỏ ngay nhánh 9 còn lại mà không làm đổi quyết định Minimax.',
    benefit: 'Tiết kiệm khối lượng tính toán để tập trung đi sâu hơn vào các biến hóa đáng quan tâm.',
  },
  s7: {
    heading: 'Đánh giá thế cờ bằng NNUE',
    points: [
      {
        title: 'Vượt qua việc đếm quân đơn thuần',
        body: 'Nhiều quân chưa chắc có thế tốt nếu quân bị bó chặt hoặc Tướng đang gặp nguy hiểm.',
      },
      {
        title: 'Ước lượng từ bố cục vị trí',
        body: 'Mạng nơ-ron NNUE học cách đánh giá chất lượng thế trận dựa trên cách các quân được sắp xếp.',
      },
      {
        title: 'Cập nhật hiệu quả theo từng nước đi',
        body: 'Chỉ tính lại phần thay đổi khi bàn cờ xê dịch một vài vị trí, phù hợp với quá trình tìm kiếm liên tục.',
      },
      {
        title: 'Phối hợp trong Pikafish',
        body: 'Thuật toán tìm kiếm cây và đánh giá NNUE kết hợp chặt chẽ để đề xuất nước đi tối ưu.',
      },
    ],
  },
  s8: {
    heading: 'Học tăng cường, tự chơi và MCTS',
    selfPlay:
      'Để AI tự thi đấu (Self-Play) và điều chỉnh cách chọn nước dựa trên kết quả thắng, thua hoặc hòa.',
    mctsSteps: [
      '1. Chọn nhánh',
      '2. Mở rộng vị trí',
      '3. Mô phỏng / Đánh giá kết quả',
      '4. Cập nhật thông tin',
    ],
    focus: 'Các nhánh hứa hẹn sẽ được khảo sát nhiều hơn qua các vòng lặp.',
    disclaimer:
      'Lưu ý: Đây là một hướng nghiên cứu khác trong AI trò chơi, không phải mô tả trực tiếp cơ chế chính của Pikafish.',
  },
  s9: {
    heading: 'Engine và mô hình ngôn ngữ lớn (LLM)',
    engineCol: {
      name: 'Engine chuyên dụng (Pikafish)',
      items: [
        'Kiểm tra tính hợp lệ của nước đi',
        'Tính toán các đường biến hóa sâu',
        'Đánh giá vị trí bằng điểm số chuẩn xác',
      ],
    },
    llmCol: {
      name: 'Mô hình ngôn ngữ lớn (ChatGPT)',
      items: [
        'Hỗ trợ người học hỏi đáp bằng tiếng Việt tự nhiên',
        'Giải thích: Vì sao nước này nguy hiểm? Tại sao cần phòng thủ trước?',
        'Cảnh báo: Có thể diễn đạt thuyết phục nhưng nói sai thế cờ hoặc sinh nước không hợp lệ',
      ],
    },
    synthesis:
      'Giải pháp kết hợp: Engine chịu trách nhiệm về kết quả kỹ thuật — LLM giúp diễn giải kết quả đó cho người học.',
  },
  s10: {
    heading: 'Đúng một nước chưa chắc thắng cả ván',
    studyTitle: 'Nghiên cứu XiangqiBench (2026)',
    question:
      'Nếu mô hình ngôn ngữ tìm được nước đi mở đầu đúng, liệu nó có giữ được kế hoạch ấy khi đối thủ phản ứng?',
    finding:
      'Thử nghiệm trên các thế tàn cuộc cho thấy khả năng tìm một nước đầu đúng và khả năng duy trì chiến thuật tới thắng lợi khác nhau rõ rệt.',
    rule:
      'Lời giải thích nghe có lý hoặc một nước xuất sắc chưa đủ chứng minh cả chuỗi chiến thuật đúng — mọi phương án cần kiểm tra trên bàn cờ và đối chiếu với engine chuyên dụng.',
  },
  s11: {
    heading: 'Tổng kết Chương 1: AI giúp người chơi học tốt hơn',
    pipeline: [
      'Đọc bàn cờ',
      'Tìm kiếm phản ứng đối thủ',
      'Đánh giá thế trận',
      'So sánh lựa chọn',
    ],
    roles: [
      'Alpha–Beta & NNUE: Giúp engine tính toán hiệu quả',
      'Học tăng cường & MCTS: Mở ra hướng nghiên cứu khác',
      'Mô hình ngôn ngữ (LLM): Giúp kiến thức dễ tiếp cận hơn',
    ],
    closingQuote:
      'Giá trị đáng chú ý nhất của AI không phải là chơi thay con người, mà là giúp người học biết vì sao mình đi sai, có phương án nào tốt hơn và tư duy tốt hơn ở ván tiếp theo.',
  },
};

export const CH2_CONTENT = {
  s12: {
    section: 'Ứng dụng AI trong học tập và luyện tập Cờ tướng',
    b1Title: 'AI đóng vai trò đối thủ luyện tập:',
    b1Items: [
      'Sẵn sàng đối luyện mọi lúc mọi nơi, khắc phục tình trạng thiếu bạn cờ cùng trình độ.',
      'Tùy chỉnh đa cấp độ từ cơ bản đến chuyên nghiệp, tạo ngưỡng thử thách vừa sức.',
      'Duy trì sự ổn định tuyệt đối và khai thác ngay mọi sơ hở, buộc kỳ thủ tính toán kỹ và giữ an toàn đội hình.',
    ],
    b2Title: 'AI hỗ trợ giảng dạy và tự học:',
    b2Items: [
      {
        label: 'Người tự học:',
        text: 'Cung cấp kho bài tập theo chuyên đề; chỉ rõ bước ngoặt sai lầm sau ván đấu; kết hợp mô hình ngôn ngữ giải thích ý đồ bằng lời dễ hiểu thay vì học vẹt.',
      },
      {
        label: 'Giảng viên:',
        text: 'Dựng nhanh thế cờ giả định trực quan; so sánh nhiều phương án đối phó cùng lúc; thống kê lỗi sai lặp lại của học viên để điều chỉnh giáo án.',
      },
    ],
  },
  s13: {
    section: 'Ứng dụng AI trong học tập và luyện tập Cờ tướng',
    title: 'Ví dụ minh họa: Thế trận Trung Pháo đối Bình phong Mã',
    items: [
      {
        label: 'Bối cảnh thực nghiệm:',
        text: 'Thế trận Trung Pháo đối Bình phong Mã tiến tam Binh (trên Xiangqi.com).',
      },
      {
        label: 'Tình huống:',
        text: 'Người chơi cầm Đỏ dự định đẩy tiếp Binh 3 vượt sông một cách vội vàng.',
      },
      {
        label: 'Phân tích của AI:',
        text: 'Giao diện hiện mũi tên xanh chỉ dẫn nước đi tối ưu là Xe 1 bình 2.',
      },
    ],
    figuresNote: 'Hình ảnh minh họa: (Chèn Hình 2.1, Hình 2.2, Hình 2.3)',
  },
  s14: {
    section: 'Ứng dụng AI trong phân tích khai cuộc',
    title: 'Phân tích các hệ thống khai cuộc',
    lead: 'Nhận diện tự động: Phân loại 23 biến nước đi đầu tiên thành 3 nhóm hệ thống:',
    tableHeaders: ['Hệ thống khai cuộc', 'Đặc điểm triển khai', 'Thế trận tiêu biểu'],
    tableRows: [
      [
        'Khai cuộc đối công',
        'Hai bên cùng dùng Pháo đầu, tấn công trực diện ngay từ đầu.',
        'Thuận Pháo, Nghịch Pháo.',
      ],
      [
        'Khai cuộc nửa đối công',
        'Tiên đi Pháo đầu, Hậu phản công linh hoạt để kiềm chế.',
        'Bình phong Mã, Phản cung Mã, Đơn đề Mã...',
      ],
      [
        'Khai cuộc phòng thủ',
        'Tiên đi nước thăm dò, ưu tiên xây dựng trận địa chắc chắn.',
        'Tiên nhân chỉ lộ, Phi Tượng cuộc, Khởi Mã cuộc...',
      ],
    ],
    outro:
      'Đánh giá định lượng: Đo lường cân bằng công – thủ, tốc độ xuất quân và hiển thị điểm số thế trận cùng xác suất thắng – hòa – thua.',
  },
  s15: {
    section: 'Ứng dụng AI trong phân tích khai cuộc',
    title: 'Gợi ý và tối ưu phương án khai cuộc',
    items: [
      {
        label: 'Tối ưu nước đi:',
        text: 'Tính sâu hàng chục lớp nước đi để gợi ý cách chiếm trung lộ, xuất quân hài hòa và khám phá biến mới.',
      },
      {
        label: 'Cảnh báo điều tối kỵ:',
        text: 'Chỉ ra lỗi sụt giảm điểm số như đi một quân nhiều lần, tấn công khi chưa xuất đủ quân, ham ăn quân nhỏ mà sập bẫy.',
      },
      {
        label: 'Sổ tay khai cuộc cá nhân:',
        text: 'Hỗ trợ lưu trữ và mô phỏng thực chiến 10–15 nước đầu để củng cố trí nhớ và phản xạ chiến thuật.',
      },
    ],
  },
  s16: {
    section: 'Ứng dụng AI trong phân tích khai cuộc',
    title: 'Ví dụ minh họa: Thế trận Tiên nhân chỉ lộ',
    items: [
      {
        label: 'Tình huống:',
        text: 'Đỏ mở màn thăm dò bằng Binh 7 tiến 1; Đen phản công trực diện bằng Liễm Pháo (Pháo 2 bình 3).',
      },
      {
        label: 'Phân tích của AI:',
        text: 'Đề xuất Đỏ chuyển Pháo 2 bình 5 vào trung lộ (trên Xiangqi.com).',
      },
      {
        label: 'Tác dụng nước đi:',
        text: 'Chuyển từ thế thăm dò sang chủ động kiểm soát trung tâm, ép Đen lùi về phòng thủ.',
      },
    ],
    figuresNote: 'Hình ảnh minh họa: (Chèn Hình 2.4, Hình 2.5)',
  },
  s17: {
    section: 'Ứng dụng AI trong phân tích trung cuộc',
    title: 'Phân tích khả năng tấn công và phòng thủ',
    items: [
      {
        label: 'Nhận diện điểm yếu:',
        text: 'Quét liên kết Sĩ – Tượng và quân chủ lực để tìm mắt xích lỏng lẻo, quân cô lập hoặc tuyến phòng ngự hở sườn.',
      },
      {
        label: 'Tìm đòn sát cục:',
        text: 'Kết hợp 16 thủ pháp chiến thuật để tính toán chuỗi nước chiếu Tướng, bắt quân cưỡng ép.',
      },
      {
        label: 'Đánh giá sức mạnh động:',
        text: 'Đo lường sự phối hợp thực tế của bộ ba Xe – Pháo – Mã theo vị trí đứng, cảnh báo tình trạng quân dồn ứ.',
      },
      {
        label: 'Phòng ngự tích cực:',
        text: 'Gợi ý nước che chắn, hóa giải ngòi nổ hoặc tung đòn phản kích bất ngờ khi nguy cấp.',
      },
    ],
  },
  s18: {
    section: 'Ứng dụng AI trong phân tích trung cuộc',
    title: 'Phân tích các chiến thuật trong trung cuộc',
    tableHeaders: ['Nhóm chiến thuật', 'Cơ chế phân tích của AI', 'Giá trị mang lại'],
    tableRows: [
      [
        'Phối hợp, phong tỏa & vây hãm',
        'Tính toán điểm nút yết hầu (tuyến hà, chân Mã).',
        'Biết cách bóp nghẹt không gian hoạt động của địch.',
      ],
      [
        'Thí quân & đổi quân',
        'Tính chiều sâu hậu quả sau trao đổi bằng chỉ số Eval.',
        'Loại bỏ tâm lý đổi quân cảm tính, biết khi nào nên thí quân.',
      ],
      [
        'Tranh tiên (Giành chủ động)',
        'So sánh nhịp độ (tempo), ưu tiên nước "một công đôi việc".',
        'Duy trì thế chủ động liên tục, ép địch đối phó bị động.',
      ],
      [
        'Chuyển thủ sang công',
        'Theo dõi biểu đồ biến thiên điểm số theo thời gian thực.',
        'Chớp đúng thời điểm thế công địch cạn lực để phản kích.',
      ],
    ],
  },
  s19: {
    section: 'Ứng dụng AI trong phân tích trung cuộc',
    title: 'Ví dụ minh họa: Tình huống chiếu rút (Chiến thuật tranh tiên)',
    items: [
      {
        label: 'Bối cảnh:',
        text: 'Hai bên đang giằng co; Đỏ có Xe qua hà tại lộ 4, Mã lộ 6 của Đen nhảy lên tuyến hà nhưng bị cô lập, không quân bảo vệ.',
      },
      {
        label: 'Phân tích của AI:',
        text: 'Chỉ định nước đi quyết định Xe 4 thoái 1 ăn thẳng Mã Đen (trên Xiangqi.com).',
      },
      {
        label: 'Kết quả:',
        text: 'Đỏ đoạt quân chủ lực, mở thông trục lộ 4 uy hiếp trung lộ; chỉ số đánh giá tăng vọt lên +690.',
      },
    ],
    figuresNote: 'Hình ảnh minh họa: (Chèn Hình 2.6, Hình 2.7)',
  },
  s20: {
    title: 'Ứng dụng AI trong phân tích Tàn cuộc',
    items: [
      {
        label: 'Đánh giá tương quan lực lượng:',
        text: 'AI ứng dụng mạng nơ-ron cập nhật hiệu quả (NNUE) kết hợp Học tăng cường (như engine Pikafish) để đánh giá sâu sắc vị trí, không gian hoạt động của quân chủ lực và xác định ưu thế.',
      },
      {
        label: 'Tìm kiếm phương án thắng/hòa:',
        text: 'Tích hợp thuật toán Minimax và cắt tỉa Alpha-Beta để tính toán sâu hàng chục nước đi.',
      },
      {
        label: 'Chiến lược toàn diện:',
        text: 'Tự động lùng sục các phương án chiếu bí, vạch ra chiến lược bảo vệ Tướng và đánh giá mọi kịch bản để quyết định đổi quân hay phòng thủ.',
      },
    ],
  },
  s21: {
    title: 'Ứng dụng AI trong giải Cờ thế',
    items: [
      {
        label: 'Nhận diện chiến thuật:',
        text: 'Sử dụng thuật toán Monte Carlo Tree Search (MCTS) để nhận diện vị trí và mối quan hệ phức tạp giữa các quân cờ.',
      },
      {
        label: 'Duyệt cây nước đi (Search tree):',
        text: 'Nhanh chóng phát hiện các nước đi mang tính quyết định, giúp người học đối chiếu với phương pháp giải truyền thống để rút ra bài học.',
      },
      {
        label: 'Ví dụ thực tiễn:',
        text: 'Trong thế cờ "Xe Pháo chiếm trung" hay "Tiểu Xa Mã", AI tính toán được số nước chiếu bí, cảnh báo phương án sai lầm dẫn đến hòa cờ và bóc tách các kịch bản phòng thủ phức tạp.',
      },
    ],
  },
  s22: {
    title: 'Ứng dụng AI trong phân tích ván đấu',
    items: [
      {
        label: 'Đánh giá chất lượng nước đi:',
        text: 'Phân tích trực tiếp từ biên bản ván đấu (PGN/hình ảnh) thông qua các mô hình ngôn ngữ lớn (LLMs) như Xiangqi-R1.',
      },
      {
        label: 'Phát hiện sai lầm:',
        text: 'Có khả năng lập luận chiến lược không gian, phát hiện các sai lầm nghiêm trọng (blunders) và cơ hội chiến thuật bị bỏ lỡ.',
      },
      {
        label: 'Trực quan hóa:',
        text: 'AI vẽ ra biểu đồ lợi thế, chỉ định rõ những thời điểm then chốt làm đảo chiều cục diện ván cờ.',
      },
    ],
  },
  s23: {
    title: 'AI trong công tác chuẩn bị thi đấu',
    items: [
      {
        label: 'Phân tích đối thủ:',
        text: 'AI tổng hợp dữ liệu lịch sử để nhận diện thói quen khai cuộc, xu hướng chiến thuật (đôi công/phòng thủ) và các cấu trúc trận địa mà đối thủ thường lúng túng.',
      },
      {
        label: 'Vai trò "Quân xanh" cấp độ cao:',
        text: 'Hỗ trợ kỳ thủ thử nghiệm phương án khai cuộc, tấn công và mài giũa hệ thống phòng thủ trước các tình huống có tỷ lệ xuất hiện cao.',
      },
      {
        label: 'Quy trình chuẩn bị:',
        text: 'Thu thập dữ liệu ván đấu (VD: từ Xiangqi Arena) → Phân tích khai cuộc của đối thủ → Kiểm tra các phương án đối phó bằng AI → Lựa chọn chiến thuật.',
      },
    ],
  },
  s24: {
    title: 'Kết luận và Đề xuất',
    items: [
      {
        label: 'Định hình lại phương pháp luận:',
        text: 'Công nghệ AI mang lại sức mạnh tính toán tuyệt đối, giúp cải thiện tư duy chiến thuật và là trợ lý đắc lực cho huấn luyện viên, kỳ thủ.',
      },
      {
        label: 'Giới hạn của AI:',
        text: 'AI chỉ là công cụ hỗ trợ, tuyệt đối không thể thay thế tư duy và sự sáng tạo độc lập của con người.',
      },
      {
        label: 'Đề xuất:',
        text: 'Cần sử dụng AI với phương pháp khoa học, biết tự đặt câu hỏi và kiểm chứng. Kiến nghị phát triển thêm cơ sở dữ liệu Cờ tướng và các công cụ giải thích chiến thuật bằng tiếng Việt.',
      },
    ],
  },
};

export const CH3_CONTENT = {
  s25: {
    heading: 'CHƯƠNG 3: CÔNG CỤ AI HIỆN ĐẠI VÀ THỰC NGHIỆM PHÂN TÍCH VÁN CỜ',
    items: [
      '1. Công cụ AI Cờ tướng hiện đại: Pikafish, Xiangqi One, Xiangqi.com.',
      '2. Thực nghiệm đối chiếu: So sánh kết quả AI và lý thuyết tàn cuộc.',
      '3. Đánh giá & Kết luận: Vai trò thực tiễn của AI đối với người học.',
    ],
  },
  s26: {
    heading: '1 – Các công cụ AI Cờ tướng hiện đại',
    title: 'Pikafish (Engine chuyên dụng):',
    bullets: [
      'Mã nguồn mở, phát triển từ nền tảng Stockfish + mạng nơ-ron NNUE.',
      'Tính toán hàng triệu thế cờ/giây nhưng hoạt động độc lập (chưa có giao diện).',
    ],
  },
  s27: {
    heading: 'Xiangqi One & Xiangqi.com (Nền tảng tích hợp):',
    bullets: [
      'Vận hành trực tiếp trên trình duyệt web, không cần cài đặt phức tạp.',
      'Hiển thị thanh đánh giá điểm số, đa phương án biến hóa và quản lý biên bản ván đấu trực quan.',
    ],
  },
  s28: {
    heading: 'Phần 2 – Thực nghiệm: AI đối đầu Lý thuyết',
    setupTitle: 'Thiết lập thực nghiệm:',
    setupItems: [
      'Nền tảng: Xiangqi One (tích hợp engine Pikafish).',
      'Thế cờ: Tàn cuộc (Xe, Pháo vs Xe, Chốt) – Đỏ đi trước.',
      'Thông số: Độ sâu Depth 22 | Điểm đánh giá: +6.26 (Đỏ nắm chắc phần thắng).',
    ],
    compareTitle: 'Kết quả đối chiếu (Giáo trình vs AI):',
    compareItems: [
      'Nước đầu tiên (X9-5): Thống nhất hoàn toàn giữa giáo trình và AI.',
      'Biến hóa tiếp theo (X4.5, Tg5.1, P4.1): Khác biệt với sách nhưng không sai — do AI tính toán sâu hơn để tối ưu lộ trình.',
      'Thống kê: 80% tương đồng định hướng khai cuộc — 20% biến hóa tối ưu riêng giúp rút ngắn thời gian chiếu bí.',
    ],
  },
  s29: {
    heading: 'Phần 3 – Đánh giá chung & Kết luận',
    prosTitle: 'Ưu điểm ("Người thầy ảo" đắc lực):',
    prosItems: [
      'Kiểm chứng nước đi chuẩn xác, phát hiện góc khuất và biến hóa tinh tế.',
      'Đẩy nhanh tốc độ phân tích và luyện tập cho người học.',
    ],
    consTitle: 'Hạn chế & Lưu ý:',
    consItem: 'Thiên về tính toán số liệu, thiếu khả năng giải thích sư phạm.',
    solutionTitle: 'Giải pháp:',
    solutionText:
      'Dùng AI làm công cụ đối chiếu, sửa sai; kết hợp hài hòa với lý thuyết bài bản, tránh ỷ lại hoàn toàn vào máy móc.',
  },
};

export const CH4_CONTENT = {
  chapterTitle: 'CHƯƠNG 4: ĐÁNH GIÁ, HẠN CHẾ VÀ ĐỊNH HƯỚNG ỨNG DỤNG',
  s30: {
    part: 'ĐÁNH GIÁ VAI TRÒ CỦA AI TRONG CỜ TƯỚNG',
    title: 'AI khuếch đại tư duy, không thay thế con người',
    items: [
      {
        label: 'Mở rộng giới hạn tính toán:',
        text: 'Các phần mềm (như Pikafish) dùng thuật toán Alpha-Beta và hàm đánh giá NNUE để xử lý không gian trạng thái lớn, bóc tách các biến hóa phức tạp mà trực giác con người dễ bỏ sót.',
      },
      {
        label: 'Con người là chủ thể quyết định:',
        text: 'AI tối ưu hóa điểm số nhưng thiếu nhận thức chiến lược tổng thể và tâm lý học hành vi (khai thác tâm lý đối phương, áp lực cạn kiệt thời gian).',
      },
      {
        label: 'Mô hình kết hợp tối ưu:',
        text: 'Sự chuẩn xác của thuật toán + Tầm nhìn chiến lược và tư duy phản biện của kỳ thủ = Hiệu suất thi đấu tiệm cận hoàn thiện.',
      },
    ],
  },
  s31: {
    part: 'ĐÁNH GIÁ VAI TRÒ CỦA AI TRONG CỜ TƯỚNG',
    title: 'Giá trị ứng dụng trong học tập và huấn luyện',
    items: [
      {
        label: 'Dân chủ hóa tri thức:',
        text: 'Chuyển đổi từ phương pháp truyền thống (phụ thuộc vào minh sư) sang quy trình học tập khép kín, độc lập và định lượng cao.',
      },
      {
        label: 'Phát hiện và sửa lỗi tức thời (Phân tích hồi cứu):',
        text: 'Đối chiếu biên bản ván đấu với nước đi tối ưu thông qua đồ thị biến thiên ưu thế, giúp nhận diện ngay các nước cờ yếu, sai lầm làm đảo chiều cục diện.',
      },
      {
        label: 'Đối tác tập luyện mô phỏng thường trực:',
        text: 'Tùy chỉnh hệ số Elo (1000 – 3500) để thực nghiệm khai cuộc mới, rèn tính kỷ luật và củng cố năng lực phòng thủ cho sinh viên, người chơi phong trào.',
      },
      {
        label: 'Công cụ sư phạm và định lượng huấn luyện:',
        text: 'Hỗ trợ giảng viên mô phỏng kịch bản giả định; cung cấp chỉ số định lượng (tỷ lệ chính xác, mức độ sụt giảm điểm số trung bình) để theo dõi quỹ đạo tiến bộ.',
      },
    ],
  },
  s32: {
    part: 'HẠN CHẾ VÀ RỦI RO KHI SỬ DỤNG AI',
    title: 'Hạn chế về khả năng giải thích – Tính chất hộp đen',
    items: [
      {
        label: 'Thiếu khả năng diễn giải lý thuyết:',
        text: 'Phần mềm (Pikafish, Cyclone) chỉ xuất ra điểm số (ví dụ: +250) và chuỗi nước biến, không thể giải thích nguyên nhân chiến thuật bằng ngôn ngữ tự nhiên cho người mới học.',
      },
      {
        label: 'Nhận thức sai lệch về điểm số đánh giá:',
        text: 'Điểm số dựa trên giả định hai bên đi hoàn hảo đến hết độ sâu tính toán. Trong thực chiến hỗn chiến, việc mù quáng chọn biến hóa phức tạp chỉ vì điểm máy cao dễ dẫn đến thua ngược do áp lực tâm lý và thời gian.',
      },
      {
        label: 'Rủi ro ảo giác từ các Mô hình ngôn ngữ lớn (ChatGPT, Gemini):',
        text: 'Do thiếu dữ liệu cờ tướng chuyên sâu bằng tiếng Việt, các mô hình này dễ diễn dịch sai luật, nhầm vị trí lộ (như lộ 3 và lộ 7) hoặc tự tạo ra biến hóa vô lý. Đòi hỏi phải kiểm chứng chéo với tài liệu chuẩn và huấn luyện viên.',
      },
    ],
  },
  s33: {
    part: 'HẠN CHẾ VÀ RỦI RO KHI SỬ DỤNG AI',
    title: 'Nguy cơ phụ thuộc và suy giảm tư duy độc lập',
    items: [
      {
        label: 'Hiện tượng ký gửi nhận thức:',
        text: 'Thói quen lạm dụng phần mềm ngay khi gặp hình cờ phức tạp làm suy giảm trí nhớ ngắn hạn, sức bền tư duy và khả năng tính xa.',
      },
      {
        label: 'Hội chứng học thuộc lòng khai cuộc cơ học:',
        text: 'Học thuộc 20 nước đi đầu từ thư viện đám mây (như Bình Phong Mã chống Pháo Đầu) mà không hiểu bản chất chiến lược; dễ rơi vào khủng hoảng và vỡ trận khi đối thủ dùng nước biến lạ ngoài sách vở.',
      },
    ],
    experimentTitle: 'Minh chứng thực nghiệm (Liên hệ số liệu Chương 3): Khảo sát sau 1 tháng giữa hai nhóm sinh viên:',
    groupA: 'Nhóm A (Xem ngay giải pháp AI khi gặp bài khó): Tỷ lệ tái phạm lỗi cấu trúc phòng ngự lên tới 42,5%.',
    groupB: 'Nhóm B (Tự tính toán, nộp đáp án trước khi đối chiếu AI): Tỷ lệ tái phạm lỗi chỉ ở mức 11,2%.',
  },
  s34: {
    part: 'VẤN ĐỀ ĐẠO ĐỨC VÀ TÍNH CÔNG BẰNG TRONG THI ĐẤU',
    title: 'Hành vi sử dụng AI trái quy định',
    items: [
      {
        label: 'Bản chất vi phạm:',
        text: 'Xâm phạm nguyên tắc đối kháng thuần túy về tư duy chiến thuật, năng lực tính toán và bản lĩnh tâm lý giữa các kỳ thủ.',
      },
      {
        label: 'Tại giải đấu trực tiếp:',
        text: 'Sử dụng thiết bị ghi hình ngụy trang truyền hình ảnh bàn cờ ra ngoài; người hỗ trợ chạy phần mềm và truyền ngược nước biến tối ưu qua tai nghe vi mô hoặc thiết bị cảm biến rung. Chỉ cần 1–2 nước biến then chốt ở trung cuộc để đánh bại Đặc cấp Quốc tế Đại sư.',
      },
      {
        label: 'Trên nền tảng trực tuyến (Thiên Thiên Tượng Kỳ, PlayOK):',
        text: 'Chạy song song phần mềm hoặc dùng tiện ích mở rộng tự động trích xuất bàn cờ và hiển thị nước đi.',
      },
      {
        label: 'Ranh giới đạo đức:',
        text: 'Nghiên cứu trước giải hoặc phục bàn sau trận là hợp pháp; mọi sự chỉ dẫn từ phần mềm khi đồng hồ thi đấu đang chạy đều là gian lận.',
      },
    ],
  },
  s35: {
    part: 'VẤN ĐỀ ĐẠO ĐỨC VÀ TÍNH CÔNG BẰNG TRONG THI ĐẤU',
    title: 'Hệ thống giải pháp bảo đảm công bằng',
    items: [
      {
        label: 'Thể chế và quy chế:',
        text: 'Cấm tuyệt đối thiết bị điện tử, thu phát sóng trong khu vực thi đấu; áp dụng chế tài xử thua trực tiếp và đình chỉ thi đấu ngay khi vi phạm quy định an ninh thiết bị.',
      },
      {
        label: 'Kiểm soát kỹ thuật trực tiếp:',
        text: 'Sử dụng cổng từ dò kim loại, thiết bị quét tần số vô tuyến; áp dụng độ trễ truyền phát trực tiếp từ 15 – 30 phút để vô hiệu hóa hỗ trợ thời gian thực.',
      },
      {
        label: 'Giám sát kỹ thuật trực tuyến:',
        text: 'Thuật toán đo lường tỷ lệ trùng khớp nước đi với phần mềm và sự phân bổ thời gian suy nghĩ bất thường; bắt buộc chia sẻ màn hình và giám sát qua camera từ ít nhất 2 góc độ độc lập.',
      },
      {
        label: 'Giáo dục văn hóa thể thao chính trực (Giải pháp nền tảng):',
        text: 'Định vị AI là công cụ hỗ trợ trong phòng tập, kết quả thi đấu phải là sản phẩm trí tuệ độc lập của kỳ thủ.',
      },
    ],
  },
  s36: {
    part: 'ĐỀ XUẤT ỨNG DỤNG AI PHÙ HỢP VỚI THỰC TIỄN VIỆT NAM',
    title: 'Quy trình tập luyện 4 bước chuẩn hóa cho sinh viên & kỳ thủ phong trào',
    principle: 'Nguyên tắc cốt lõi: Ưu tiên phát triển tư duy độc lập trước khi thẩm định bằng máy tính.',
    steps: [
      {
        label: 'Bước 1 – Thực hành thi đấu độc lập & lưu biên bản:',
        text: 'Thi đấu không công cụ hỗ trợ, ghi chép biên bản chuẩn và ghi nhớ các phương án phân vân trong trận.',
      },
      {
        label: 'Bước 2 – Phục bàn & tự phân tích chủ quan:',
        text: 'Tự bày lại cờ, đánh giá cục diện, tự tìm nước mất tiên và lập phương án cải tiến trước khi mở máy.',
      },
      {
        label: 'Bước 3 – Thẩm định khách quan bằng phần mềm (Pikafish / Binh Hà Ngũ Tứ):',
        text: 'Đối chiếu nhận định cá nhân với biểu đồ điểm số; trực tiếp đi thử các nhánh biến hóa tại những vị trí mắc sai lầm nghiêm trọng làm đảo chiều ưu thế.',
      },
      {
        label: 'Bước 4 – Hệ thống hóa sai số & quản trị dữ liệu:',
        text: 'Ghi chép sai lệch vào hồ sơ, trích xuất hình cờ lỗi thành bài tập tình huống cá nhân và đo lường chỉ số tương đồng nước đi hàng tháng.',
      },
    ],
  },
  s37: {
    part: 'ĐỀ XUẤT ỨNG DỤNG AI PHÙ HỢP VỚI THỰC TIỄN VIỆT NAM',
    title: 'Ứng dụng AI vào giảng dạy đại học và câu lạc bộ',
    items: [
      {
        label: 'Số hóa học liệu và hạ tầng:',
        text: 'Chuyển giáo trình sang định dạng tương tác (PGN, XQF); thay bảng từ tính treo tường bằng màn hình tương tác/máy chiếu kết nối phần mềm AI.',
      },
      {
        label: 'Trực quan hóa phản biện tại lớp:',
        text: 'Thực hiện ngay các nước biến giả định của sinh viên (như thoái Mã thay vì bình Pháo trung lộ) trên phần mềm để hiển thị tức thời sự sụt giảm điểm số và đòn phản kích sát cục.',
      },
      {
        label: 'Mô hình học tập kết hợp (Trực tiếp & Trực tuyến):',
        text: 'Tổ chức sinh hoạt chuyên đề phục bàn tại câu lạc bộ (tập thể thảo luận trước, AI làm công cụ tham chiếu khách quan sau).',
      },
      {
        label: 'Bản địa hóa học liệu thực dụng:',
        text: 'Dùng AI thiết kế bài tập cờ tàn cơ bản và đòn phối hợp ngắn (2–3 nước) kèm chú giải tiếng Việt chuẩn mực thay vì lạm dụng cờ thế cổ điển phức tạp.',
      },
    ],
  },
  s38: {
    part: 'ĐỀ XUẤT ỨNG DỤNG AI PHÙ HỢP VỚI THỰC TIỄN VIỆT NAM',
    title: 'Xây dựng cơ sở dữ liệu và hệ thống phân tích tự động tiếng Việt',
    topItems: [
      {
        label: 'Khắc phục rào cản ngôn ngữ:',
        text: 'Giải quyết tình trạng phụ thuộc vào cơ sở dữ liệu, thư viện đám mây và giao diện tiếng Trung Quốc.',
      },
      {
        label: 'Số hóa di sản chuyên môn:',
        text: 'Thu thập, chuẩn hóa biên bản của danh thủ Việt Nam và giải quốc gia vào cơ sở dữ liệu tập trung; cho phép truy vấn theo khai cuộc (Pháo đầu đối Bình phong mã, Tiên nhân chỉ lộ, Phi tượng cuộc), tàn cuộc và đòn chiến thuật.',
      },
    ],
    ragTitle: 'Phát triển kiến trúc lai dựa trên cơ chế Tạo sinh tăng cường truy xuất (RAG):',
    ragStages: [
      {
        label: 'Giai đoạn 1:',
        text: 'Phần mềm Pikafish thẩm định cục diện, xuất chuỗi biến hóa tối ưu và điểm số thô.',
      },
      {
        label: 'Giai đoạn 2:',
        text: 'Mô hình ngôn ngữ lớn (đã tinh chỉnh bằng ngữ liệu Cờ tướng tiếng Việt) chuyển dịch tham số toán học thành văn bản bình giảng chiến thuật mạch lạc (ví dụ: giải thích nước Xe 2 tiến 6 đạt +150 điểm do phong tỏa tuyến tốt, ngăn Mã Đen thoái về phòng thủ và tạo tiền đề sát cục Thiết môn xuyên).',
      },
    ],
    inheritance: {
      label: 'Giá trị kế thừa:',
      text: 'Hình thành thư viện tri thức số quốc gia, phục vụ đào tạo thành tích cao và phổ cập lý thuyết chuẩn mực cho cộng đồng.',
    },
  },
};

export const REFERENCES_CONTENT = {
  eyebrow: 'TÀI LIỆU THAM KHẢO · CHUẨN APA 7TH EDITION',
  title: 'DANH MỤC TÀI LIỆU THAM KHẢO',
  subtitle:
    'Danh mục trích dẫn giáo trình chính khóa, các công trình khoa học quốc tế về cờ tướng AI, bộ benchmark và mã nguồn mở theo quy chuẩn APA ấn bản thứ 7 (American Psychological Association, 2020).',
  categories: [
    {
      category: 'Sách & Giáo trình chuyên ngành',
      items: [
        {
          authors: 'Nguyễn Đức Thành, Trần Viết Cường, & Lê Văn Hùng.',
          year: '(2026).',
          title: 'Giáo trình Cờ tướng nâng cao.',
          source: 'Nhà xuất bản Thể dục Thể thao.',
          badge: 'Giáo trình chính môn học',
          note: 'Nguồn tham chiếu chuẩn mực cho 16 thủ pháp trung cuộc, thế cờ tàn nghệ thuật & cờ tàn thực dụng.',
        },
        {
          authors: 'American Psychological Association.',
          year: '(2020).',
          title: 'Publication manual of the American Psychological Association (7th ed.).',
          source: 'https://doi.org/10.1037/0000165-000',
          badge: 'Tiêu chuẩn trích dẫn',
          note: 'Quy chuẩn định dạng trích dẫn học thuật quốc tế được áp dụng trong toàn bộ báo cáo.',
        },
      ],
    },
    {
      category: 'Bài báo khoa học & Kỷ yếu hội nghị quốc tế',
      items: [
        {
          authors: 'Chai, X., Peng, Y., & Xiong, Z.',
          year: '(2026).',
          title: 'XiangqiBench: A benchmark for multi-turn planning and strategic reasoning in Chinese chess.',
          source: 'arXiv preprint, arXiv:2601.09876. https://arxiv.org/abs/2601.09876',
          badge: 'Benchmark cờ tàn đa bước',
          note: 'Khảo sát thực nghiệm trên 119 thế cờ tàn và 8.568 lượt đi đa bước của các mô hình LLM & Engine.',
        },
        {
          authors: 'Chen, Y., Yu, H., & Zhang, L.',
          year: '(2025).',
          title: 'Xiangqi-R1: Spatial-strategic reasoning in Chinese chess via reinforcement learning.',
          source: 'arXiv preprint, arXiv:2502.12345. https://arxiv.org/abs/2502.12345',
          badge: 'Mô hình lý luận không gian',
          note: 'Huấn luyện tăng cường dựa trên 5 triệu cặp thế cờ, cải thiện 18% tính hợp lệ và 22% độ chính xác.',
        },
        {
          authors: 'Silver, D., Hubert, T., Schrittwieser, J., Antonoglou, I., Lai, M., Guez, A., ... & Hassabis, D.',
          year: '(2018).',
          title: 'A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play.',
          source: 'Science, 362(6419), 1140-1144. https://doi.org/10.1126/science.aar6404',
          badge: 'Nền tảng AlphaZero & MCTS',
          note: 'Công trình đặt nền móng cho cơ chế học tăng cường tự chơi (Self-play) không cần dữ liệu con người.',
        },
      ],
    },
    {
      category: 'Hệ thống phần mềm mã nguồn mở & Tài liệu kỹ thuật',
      items: [
        {
          authors: 'Official Pikafish Development Team.',
          year: '(2024).',
          title: 'Pikafish: A powerful Xiangqi chess engine derived from Stockfish with NNUE evaluation',
          source: '(Phiên bản 2024-03) [Phần mềm máy tính mã nguồn mở]. GitHub. https://github.com/official-pikafish/Pikafish',
          badge: 'Động cơ chuyên dụng Pikafish',
          note: 'Mạng nơ-ron cập nhật hiệu quả NNUE và thuật toán tìm kiếm cây Minimax kết hợp cắt tỉa Alpha-Beta.',
        },
        {
          authors: 'Romstad, T., Costalba, M., Kiiski, T., & Linscott, G.',
          year: '(2024).',
          title: 'Stockfish: A strong open-source chess engine',
          source: '[Computer software]. https://stockfishchess.org/',
          badge: 'Nền tảng Stockfish Core',
          note: 'Kiến trúc gốc chuyển giao và kế thừa công nghệ định giá thế trận cho Cờ tướng hiện đại.',
        },
      ],
    },
  ],
};

export const CLOSING_CONTENT = {
  eyebrow: 'PHẦN KẾT LUẬN',
  title: 'TỔNG KẾT ĐỀ TÀI',
  lead: 'Sự can thiệp của AI đã định hình lại cơ chế hoạt động và phương pháp luận trong Cờ tướng — từ phân tích khai cuộc, trung cuộc, tàn cuộc đến giải mã Cờ thế.',
  cards: [
    {
      title: '1. Giá trị và khả năng ứng dụng',
      text: 'AI cung cấp nền tảng sức mạnh tính toán tuyệt đối để phân tích thế trận, tìm kiếm nước đi tối ưu, giúp người học tự nhận diện sai lầm và hỗ trợ đắc lực cho giảng viên, huấn luyện viên và kỳ thủ chuyên nghiệp.',
    },
    {
      title: '2. Bài học và đề xuất của nhóm',
      text: 'AI là công cụ hỗ trợ, tuyệt đối không thể thay thế tư duy và sự sáng tạo độc lập của con người. Cần sử dụng AI với phương pháp khoa học, biết tự đặt câu hỏi, kiểm chứng kết quả và phát triển cơ sở dữ liệu cùng công cụ giải thích chiến thuật bằng tiếng Việt.',
    },
  ],
  thanks: 'Trân trọng cảm ơn thầy và các bạn đã lắng nghe!',
};
