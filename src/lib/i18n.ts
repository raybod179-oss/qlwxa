export const locales = ['fa', 'en'] as const;
export type L = (typeof locales)[number];
export const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://qelvexa.com';

type FAQ = { q: string; a: string };
type T = { title: string; h1: string; desc: string; keywords: string[]; intro: string; faq: FAQ[] };
type ToolEntry = { slug: string; icon: string; fa: T; en: T };

export const tools: ToolEntry[] = [
  { slug: 'merge-pdf', icon: '▣',
    fa: {
      title: 'ادغام PDF آنلاین رایگان بدون آپلود | Qelvexa',
      h1: 'ادغام PDF',
      desc: 'چند فایل PDF را به‌صورت رایگان و آنلاین در یک فایل ادغام کنید. فایل شما آپلود نمی‌شود، همه‌چیز داخل مرورگرتان انجام می‌شود.',
      keywords: ['ادغام PDF', 'ترکیب فایل PDF', 'یکی کردن PDF', 'ادغام چند PDF رایگان', 'merge pdf online free'],
      intro: 'اگر چند فایل PDF جداگانه دارید و می‌خواهید آن‌ها را در یک فایل واحد ترکیب کنید، ابزار ادغام PDF Qelvexa این کار را در چند ثانیه و کاملاً رایگان انجام می‌دهد. برخلاف بیشتر سایت‌های مشابه، فایل شما هیچ‌وقت به هیچ سروری آپلود نمی‌شود؛ کل فرایند ترکیب فایل‌ها با استفاده از قدرت پردازشی مرورگر خودتان انجام می‌شود، پس هم سریع‌تر است و هم اطلاعات حساس شما (قرارداد، مدرک تحصیلی، فیش حقوقی) هیچ‌وقت جایی ارسال نمی‌شود. کافی است فایل‌ها را به ترتیب دلخواه انتخاب کنید و دکمه شروع را بزنید.',
      faq: [
        { q: 'آیا ادغام PDF در Qelvexa واقعاً رایگان است؟', a: 'بله، این ابزار کاملاً رایگان است و محدودیتی در تعداد استفاده روزانه ندارد.' },
        { q: 'آیا فایل‌های من آپلود می‌شوند؟', a: 'خیر. تمام پردازش داخل مرورگر شما انجام می‌شود و فایلی به سرور ارسال نمی‌شود.' },
        { q: 'حداکثر چند فایل PDF را می‌توانم ادغام کنم؟', a: 'محدودیت مشخصی وجود ندارد؛ فقط به حافظه و قدرت پردازشی دستگاه شما بستگی دارد.' },
      ],
    },
    en: {
      title: 'Merge PDF Online Free — No Upload | Qelvexa',
      h1: 'Merge PDF',
      desc: 'Combine multiple PDF files into one, free and online. Nothing is uploaded — everything runs in your browser.',
      keywords: ['merge pdf', 'combine pdf files', 'merge pdf online free', 'join pdf files', 'pdf merger no upload'],
      intro: 'Need to combine several PDF files into a single document? Qelvexa\'s merge PDF tool does it in seconds, completely free. Unlike most similar sites, your files are never uploaded to any server — the entire merge happens using your own browser\'s processing power, which makes it faster and keeps sensitive documents (contracts, transcripts, payslips) completely private. Just pick your files in the order you want and press start.',
      faq: [
        { q: 'Is merging PDFs on Qelvexa really free?', a: 'Yes, this tool is completely free with no daily usage limit.' },
        { q: 'Are my files uploaded anywhere?', a: 'No. All processing happens locally in your browser; nothing is sent to a server.' },
        { q: 'How many PDF files can I merge at once?', a: 'There is no fixed limit — it depends on your device\'s memory and processing power.' },
      ],
    } },
  { slug: 'image-to-pdf', icon: '▤',
    fa: {
      title: 'تبدیل عکس به PDF آنلاین رایگان | Qelvexa',
      h1: 'تبدیل عکس به PDF',
      desc: 'عکس‌های JPG، PNG و WebP را به یک فایل PDF تبدیل کنید. رایگان، سریع و بدون آپلود فایل.',
      keywords: ['تبدیل عکس به pdf', 'عکس به pdf رایگان', 'ساخت pdf از عکس', 'jpg to pdf', 'image to pdf converter'],
      intro: 'برای ارسال مدارک اسکن‌شده، فاکتور یا هر مجموعه عکسی که باید در قالب یک فایل PDF مرتب ارائه شود، ابزار تبدیل عکس به PDF Qelvexa بهترین گزینه است. می‌توانید چند عکس با فرمت‌های JPG، PNG یا WebP را انتخاب کنید تا هرکدام به‌عنوان یک صفحه در فایل PDF نهایی قرار بگیرند. تمام تبدیل در همان مرورگر شما انجام می‌شود، پس عکس‌های شخصی یا اسناد حساس هیچ‌وقت جایی آپلود نمی‌شوند.',
      faq: [
        { q: 'آیا ترتیب عکس‌ها در PDF نهایی حفظ می‌شود؟', a: 'بله، عکس‌ها دقیقاً به همان ترتیبی که انتخاب می‌کنید در فایل PDF قرار می‌گیرند.' },
        { q: 'آیا کیفیت عکس افت می‌کند؟', a: 'کیفیت عکس تقریباً بدون تغییر حفظ می‌شود و اندازه صفحه متناسب با ابعاد اصلی عکس تنظیم می‌شود.' },
        { q: 'چه فرمت‌های عکسی پشتیبانی می‌شود؟', a: 'JPG، PNG و WebP پشتیبانی می‌شوند.' },
      ],
    },
    en: {
      title: 'Image to PDF Converter Free — JPG, PNG, WebP | Qelvexa',
      h1: 'Image to PDF',
      desc: 'Convert JPG, PNG and WebP images into one PDF file. Free, fast, and nothing is uploaded.',
      keywords: ['image to pdf', 'jpg to pdf converter', 'convert photos to pdf free', 'png to pdf', 'image to pdf online'],
      intro: 'Whether you need to send scanned documents, receipts, or any set of images as one tidy PDF, Qelvexa\'s image to PDF tool is the fastest way to do it. Select multiple JPG, PNG or WebP images and each becomes a page in the final PDF. The entire conversion runs in your own browser, so your personal photos or sensitive documents are never uploaded anywhere.',
      faq: [
        { q: 'Is the order of images preserved in the final PDF?', a: 'Yes, images appear in the exact order you select them.' },
        { q: 'Does image quality drop?', a: 'Quality is preserved at a high level, and each page size matches the original image dimensions.' },
        { q: 'Which image formats are supported?', a: 'JPG, PNG and WebP are all supported.' },
      ],
    } },
  { slug: 'compress-image', icon: '⌁',
    fa: {
      title: 'کم کردن حجم عکس آنلاین رایگان | Qelvexa',
      h1: 'فشرده‌سازی عکس',
      desc: 'حجم عکس را بدون افت محسوس کیفیت کاهش دهید. مناسب برای آپلود در سایت، ایمیل یا شبکه‌های اجتماعی.',
      keywords: ['کم کردن حجم عکس', 'فشرده سازی عکس آنلاین', 'کاهش سایز عکس', 'compress image online', 'image compressor free'],
      intro: 'عکس‌های دوربین و گوشی امروزی معمولاً حجم بالایی دارند و آپلود آن‌ها در سایت، ایمیل یا فرم‌های اداری با محدودیت حجم مواجه می‌شود. ابزار فشرده‌سازی عکس Qelvexa حجم فایل را به‌طور چشمگیری کاهش می‌دهد، در حالی‌که کیفیت بصری عکس تقریباً بدون تغییر باقی می‌ماند. می‌توانید میزان فشرده‌سازی را با تنظیم کیفیت به‌صورت دستی کنترل کنید تا بهترین تعادل بین حجم و کیفیت را پیدا کنید.',
      faq: [
        { q: 'چقدر حجم عکس کاهش پیدا می‌کند؟', a: 'بسته به عکس اصلی و تنظیم کیفیت انتخابی، معمولاً بین ۵۰ تا ۹۰ درصد کاهش حجم حاصل می‌شود.' },
        { q: 'آیا افت کیفیت قابل مشاهده است؟', a: 'در تنظیمات پیش‌فرض، افت کیفیت معمولاً با چشم غیرمسلح قابل تشخیص نیست.' },
        { q: 'آیا برای آپلود در اینستاگرام یا سایت مناسب است؟', a: 'بله، خروجی این ابزار برای همه پلتفرم‌های آنلاین مناسب است.' },
      ],
    },
    en: {
      title: 'Compress Image Online Free — Reduce Photo Size | Qelvexa',
      h1: 'Compress Image',
      desc: 'Reduce image file size with almost no visible quality loss. Ideal for uploads, email, and social media.',
      keywords: ['compress image online', 'reduce image size', 'image compressor free', 'shrink photo size', 'photo compression tool'],
      intro: 'Photos from modern cameras and phones are often large, which causes problems when uploading to websites, sending by email, or filling out forms with size limits. Qelvexa\'s image compression tool significantly reduces file size while keeping visual quality nearly intact. You can manually control the compression level to find the best balance between size and quality for your needs.',
      faq: [
        { q: 'How much does file size shrink?', a: 'Depending on the original image and chosen quality, you typically see a 50-90% reduction in size.' },
        { q: 'Is quality loss noticeable?', a: 'At default settings, quality loss is usually not visible to the naked eye.' },
        { q: 'Is it suitable for uploading to Instagram or websites?', a: 'Yes, the output works well for any online platform.' },
      ],
    } },
  { slug: 'qr-code', icon: '▦',
    fa: {
      title: 'ساخت QR کد رایگان و آنلاین | Qelvexa',
      h1: 'ساخت QR کد',
      desc: 'متن، لینک یا شماره تماس را به QR کد با کیفیت بالا تبدیل و دانلود کنید.',
      keywords: ['ساخت qr code', 'ساخت بارکد دو بعدی', 'qr code generator free', 'ساخت کیو آر کد رایگان', 'qr code online'],
      intro: 'QR کد راهی سریع برای اشتراک‌گذاری لینک، متن، شماره تماس یا هر اطلاعات دیگری با یک اسکن ساده است. با ابزار ساخت QR کد Qelvexa می‌توانید هر متن یا آدرس اینترنتی را به یک QR کد با کیفیت بالا تبدیل کنید و بلافاصله به‌صورت عکس دانلود کنید؛ مناسب برای چاپ روی کارت ویزیت، پوستر، بسته‌بندی محصول یا منوی رستوران.',
      faq: [
        { q: 'آیا QR کد ساخته‌شده منقضی می‌شود؟', a: 'خیر، QR کد یک تصویر ثابت است و هیچ‌وقت منقضی نمی‌شود.' },
        { q: 'آیا می‌توانم لینک وب‌سایت را به QR کد تبدیل کنم؟', a: 'بله، هر متن یا آدرس اینترنتی قابل تبدیل به QR کد است.' },
        { q: 'کیفیت عکس خروجی برای چاپ کافی است؟', a: 'بله، خروجی با کیفیت بالا تولید می‌شود و برای چاپ در اندازه‌های معمول مناسب است.' },
      ],
    },
    en: {
      title: 'QR Code Generator Free & Online | Qelvexa',
      h1: 'QR Code Generator',
      desc: 'Turn any text, link, or phone number into a high-resolution QR code and download it instantly.',
      keywords: ['qr code generator free', 'create qr code online', 'make a qr code', 'qr code maker', 'free qr generator'],
      intro: 'A QR code is a fast way to share a link, text, phone number, or any other information with a single scan. Qelvexa\'s QR code generator turns any text or web address into a high-quality QR code you can download instantly as an image — perfect for business cards, posters, product packaging, or restaurant menus.',
      faq: [
        { q: 'Does the generated QR code expire?', a: 'No, a QR code is just a static image and never expires.' },
        { q: 'Can I turn a website link into a QR code?', a: 'Yes, any text or URL can be converted into a QR code.' },
        { q: 'Is the output resolution good enough for printing?', a: 'Yes, the output is generated at high resolution and works well for standard print sizes.' },
      ],
    } },
  { slug: 'split-pdf', icon: '◫',
    fa: {
      title: 'جدا کردن صفحات PDF آنلاین رایگان | Qelvexa',
      h1: 'جدا کردن صفحات PDF',
      desc: 'یک بازه از صفحات فایل PDF را استخراج و به‌صورت فایل جدید دانلود کنید. رایگان و بدون آپلود.',
      keywords: ['جدا کردن صفحات pdf', 'استخراج صفحه pdf', 'split pdf online', 'برش فایل pdf', 'pdf splitter free'],
      intro: 'گاهی فقط به چند صفحه خاص از یک فایل PDF بزرگ نیاز دارید، نه کل سند. ابزار جدا کردن PDF در Qelvexa به شما اجازه می‌دهد بازه‌ای از صفحات (مثلاً از صفحه ۳ تا ۷) را انتخاب کرده و آن را به‌صورت یک فایل PDF جدید و مستقل دانلود کنید. این کار کاملاً در مرورگر شما انجام می‌شود و فایل اصلی هیچ‌وقت جایی آپلود نمی‌شود.',
      faq: [
        { q: 'آیا فایل اصلی من تغییر می‌کند؟', a: 'خیر، فایل اصلی دست‌نخورده باقی می‌ماند و یک فایل جدید از بازه انتخابی ساخته می‌شود.' },
        { q: 'آیا می‌توانم فقط یک صفحه را استخراج کنم؟', a: 'بله، کافی است شماره شروع و پایان را یکسان وارد کنید.' },
        { q: 'آیا کیفیت صفحات تغییر می‌کند؟', a: 'خیر، صفحات دقیقاً با همان کیفیت اصلی استخراج می‌شوند.' },
      ],
    },
    en: {
      title: 'Split PDF Pages Online Free | Qelvexa',
      h1: 'Split PDF',
      desc: 'Extract a page range from a PDF and download it as a new file. Free and nothing is uploaded.',
      keywords: ['split pdf online', 'extract pdf pages', 'pdf splitter free', 'cut pdf pages', 'separate pdf pages'],
      intro: 'Sometimes you only need a few specific pages from a large PDF, not the whole document. Qelvexa\'s split PDF tool lets you pick a page range (say, pages 3 to 7) and download it as a brand-new, standalone PDF file. The entire process runs in your browser, so the original file is never uploaded anywhere.',
      faq: [
        { q: 'Does this change my original file?', a: 'No, the original file stays untouched; a new file is created from the selected range.' },
        { q: 'Can I extract just a single page?', a: 'Yes, simply enter the same number for both the start and end page.' },
        { q: 'Does page quality change?', a: 'No, pages are extracted at their exact original quality.' },
      ],
    } },
  { slug: 'resize-image', icon: '⤢',
    fa: {
      title: 'تغییر اندازه عکس آنلاین رایگان | Qelvexa',
      h1: 'تغییر اندازه عکس',
      desc: 'عرض و ارتفاع عکس را به‌دقیقه به هر اندازه دلخواه تغییر دهید. رایگان و بدون آپلود فایل.',
      keywords: ['تغییر اندازه عکس', 'ریسایز عکس آنلاین', 'resize image online', 'تغییر سایز عکس رایگان', 'image resizer free'],
      intro: 'برای آپلود عکس پروفایل، تصویر محصول یا هر فرمی که ابعاد مشخصی می‌خواهد، ابزار تغییر اندازه عکس Qelvexa به شما اجازه می‌دهد عرض و ارتفاع دقیق تصویر را وارد کنید و در چند ثانیه نتیجه را دانلود کنید. همه‌چیز داخل مرورگر شما انجام می‌شود، بدون نیاز به نصب هیچ نرم‌افزاری.',
      faq: [
        { q: 'آیا نسبت ابعاد عکس به‌صورت خودکار حفظ می‌شود؟', a: 'می‌توانید عرض و ارتفاع را جداگانه وارد کنید؛ برای حفظ نسبت اصلی، مقادیر متناسب با ابعاد اصلی عکس وارد کنید.' },
        { q: 'فرمت خروجی چیست؟', a: 'خروجی به‌صورت فایل PNG با کیفیت بالا دانلود می‌شود.' },
        { q: 'آیا برای عکس‌های بزرگ هم کار می‌کند؟', a: 'بله، سرعت پردازش به قدرت دستگاه شما بستگی دارد اما محدودیت خاصی وجود ندارد.' },
      ],
    },
    en: {
      title: 'Resize Image Online Free | Qelvexa',
      h1: 'Resize Image',
      desc: 'Change the exact width and height of an image to any size you need. Free, nothing uploaded.',
      keywords: ['resize image online', 'image resizer free', 'change image dimensions', 'resize photo online', 'scale image online'],
      intro: 'Whether you need a profile picture, a product image, or any photo that must fit specific dimensions, Qelvexa\'s image resize tool lets you enter the exact width and height and get your result in seconds. Everything runs inside your browser, with no software to install.',
      faq: [
        { q: 'Is the aspect ratio kept automatically?', a: 'You can set width and height independently; to keep the original ratio, enter values proportional to the source image.' },
        { q: 'What format is the output?', a: 'The output is downloaded as a high-quality PNG file.' },
        { q: 'Does it work with large images?', a: 'Yes, processing speed depends on your device, but there is no fixed size limit.' },
      ],
    } },
  { slug: 'convert-image', icon: '◈',
    fa: {
      title: 'تبدیل فرمت عکس PNG JPG WebP آنلاین | Qelvexa',
      h1: 'تبدیل فرمت عکس',
      desc: 'عکس را بین فرمت‌های PNG، JPG و WebP به‌صورت رایگان و بدون آپلود تبدیل کنید.',
      keywords: ['تبدیل فرمت عکس', 'تبدیل png به jpg', 'تبدیل jpg به webp', 'convert image format online', 'png to jpg converter'],
      intro: 'هر فرمت عکس کاربرد متفاوتی دارد؛ PNG برای شفافیت، JPG برای حجم کمتر، و WebP برای بهترین تعادل بین کیفیت و حجم در وب. ابزار تبدیل فرمت عکس Qelvexa به شما اجازه می‌دهد در چند ثانیه بین این فرمت‌ها جابه‌جا شوید، بدون این‌که فایل شما جایی آپلود شود.',
      faq: [
        { q: 'کدام فرمت برای وب‌سایت بهتر است؟', a: 'WebP معمولاً بهترین تعادل بین کیفیت و حجم فایل را برای وب دارد.' },
        { q: 'آیا شفافیت عکس PNG هنگام تبدیل به JPG حفظ می‌شود؟', a: 'خیر، فرمت JPG از شفافیت پشتیبانی نمی‌کند و پس‌زمینه سفید جایگزین آن می‌شود.' },
        { q: 'آیا این ابزار رایگان است؟', a: 'بله، کاملاً رایگان و بدون محدودیت استفاده است.' },
      ],
    },
    en: {
      title: 'Convert Image Format Online — PNG, JPG, WebP | Qelvexa',
      h1: 'Convert Image Format',
      desc: 'Convert images between PNG, JPG and WebP for free, with nothing uploaded.',
      keywords: ['convert image format online', 'png to jpg converter', 'jpg to webp converter', 'image format converter free', 'webp to png'],
      intro: 'Every image format has a different purpose: PNG for transparency, JPG for smaller file size, and WebP for the best balance of quality and size on the web. Qelvexa\'s image format converter lets you switch between these formats in seconds, without ever uploading your file anywhere.',
      faq: [
        { q: 'Which format is best for a website?', a: 'WebP usually offers the best balance between quality and file size for the web.' },
        { q: 'Is PNG transparency kept when converting to JPG?', a: 'No, JPG does not support transparency and a white background replaces it.' },
        { q: 'Is this tool free?', a: 'Yes, it is completely free with no usage limits.' },
      ],
    } },
  { slug: 'date-converter', icon: '◷',
    fa: {
      title: 'تبدیل تاریخ شمسی به میلادی و برعکس | Qelvexa',
      h1: 'تبدیل تاریخ شمسی و میلادی',
      desc: 'تاریخ شمسی را به میلادی و تاریخ میلادی را به شمسی تبدیل کنید. دقیق، سریع و رایگان.',
      keywords: ['تبدیل تاریخ شمسی به میلادی', 'تبدیل تاریخ میلادی به شمسی', 'تقویم شمسی', 'date converter online', 'jalali to gregorian'],
      intro: 'برای پر کردن فرم‌های بین‌المللی، ویزا، یا هماهنگی با سایت‌های خارجی، اغلب لازم است تاریخ شمسی را به میلادی تبدیل کنید یا برعکس. ابزار تبدیل تاریخ Qelvexa این کار را به‌صورت دقیق و آنی انجام می‌دهد، بدون نیاز به محاسبه دستی یا جدول تبدیل.',
      faq: [
        { q: 'آیا این تبدیل تاریخ دقیق است؟', a: 'بله، از الگوریتم استاندارد تقویم جلالی استفاده می‌شود که دقت بالایی دارد.' },
        { q: 'آیا تبدیل تاریخ‌های قدیمی هم پشتیبانی می‌شود؟', a: 'بله، محدوده وسیعی از سال‌ها پشتیبانی می‌شود.' },
        { q: 'آیا نیاز به اینترنت دارد؟', a: 'محاسبه به‌صورت کامل در مرورگر انجام می‌شود و پس از لود اولیه صفحه نیازی به اتصال اینترنت نیست.' },
      ],
    },
    en: {
      title: 'Persian (Shamsi) to Gregorian Date Converter | Qelvexa',
      h1: 'Date Converter',
      desc: 'Convert dates between the Persian (Shamsi/Jalali) and Gregorian calendars. Accurate, fast, and free.',
      keywords: ['jalali to gregorian converter', 'shamsi to gregorian date', 'persian date converter', 'iranian calendar converter', 'date converter online'],
      intro: 'For filling out international forms, visa applications, or coordinating with foreign websites, you often need to convert a Persian (Shamsi) date to Gregorian, or the other way around. Qelvexa\'s date converter does this instantly and accurately, with no manual calculation or lookup table needed.',
      faq: [
        { q: 'Is this date conversion accurate?', a: 'Yes, it uses the standard Jalali calendar algorithm, which is highly accurate.' },
        { q: 'Does it support older dates too?', a: 'Yes, a wide range of years is supported.' },
        { q: 'Does it need an internet connection?', a: 'The calculation runs entirely in your browser, so no connection is needed after the page first loads.' },
      ],
    } },
];

export const ui = {
  fa: { tagline: 'ابزارهای فایل و عکس، سریع و خصوصی', sub: 'همه‌چیز داخل مرورگر شما انجام می‌شود. فایلی آپلود نمی‌شود و ثبت‌نام لازم نیست.', drop: 'فایل را اینجا رها کنید یا انتخاب کنید', run: 'شروع', download: 'دانلود', busy: 'در حال پردازش…', quality: 'کیفیت', qrPh: 'متن یا لینک را وارد کنید', need: 'ابتدا فایل یا متن را وارد کنید', fail: 'پردازش انجام نشد. فایل را بررسی کنید و دوباره تلاش کنید.', how: 'چطور استفاده کنم؟', steps: ['فایل‌ها را انتخاب کنید.', 'دکمه شروع را بزنید.', 'فایل نهایی را دانلود کنید.'], privacy: 'فایل‌های شما آپلود نمی‌شوند. همه‌چیز در مرورگر خودتان پردازش می‌شود.', lang: 'English', theme: 'تغییر تم', from: 'از صفحه', to: 'تا صفحه', width: 'عرض', height: 'ارتفاع', format: 'فرمت خروجی', shamsi: 'شمسی', gregorian: 'میلادی', year: 'سال', month: 'ماه', day: 'روز', convert: 'تبدیل', result: 'نتیجه', faqTitle: 'سؤالات متداول', allTools: 'همه ابزارها', home: 'خانه', about: 'درباره Qelvexa',
    badge: 'رایگان • خصوصی • تحت مرورگر', heroTitle: 'ابزارهای ساده.', heroTitle2: 'نتیجه‌ی حرفه‌ای.', heroText: 'فایل و عکس‌هایت را مستقیم در مرورگر تبدیل، فشرده و ویرایش کن. بدون ثبت‌نام، بدون آپلود، بدون پیچیدگی اضافه.', tryNow: 'امتحان کن', viewAll: 'دیدن همه ابزارها',
    aboutTitle: 'درباره ما | Qelvexa',
    aboutBody: 'Qelvexa (کلوکسا) مجموعه‌ای از ابزارهای رایگان آنلاین برای کار با فایل PDF و عکس است که تمام پردازش‌ها مستقیم داخل مرورگر شما انجام می‌شود؛ یعنی هیچ فایلی به هیچ سروری آپلود نمی‌شود.',
    aboutMission: 'ماموریت ما ساده است: ابزارهایی بسازیم که هر دانشجو، کارمند، فروشنده یا کارمند اداری بتواند بدون ثبت‌نام، بدون تبلیغات مزاحم و بدون نگرانی از امنیت فایل‌هایش، در چند ثانیه کارش را راه بیندازد. هر ابزار Qelvexa با دقت طراحی شده تا هم سریع باشد، هم روی گوشی و هم لپ‌تاپ به‌خوبی کار کند، و به‌صورت اپلیکیشن (PWA) روی آیفون، اندروید، ویندوز و مک قابل نصب باشد.',
    aboutValues: [
      { t: 'حریم خصوصی واقعی', d: 'فایل شما هیچ‌وقت از دستگاهتان خارج نمی‌شود. این یک شعار تبلیغاتی نیست؛ در کد سایت قابل بررسی است.' },
      { t: 'سرعت', d: 'بدون صف پردازش سمت سرور، نتیجه تقریباً آنی است.' },
      { t: 'بدون محدودیت مزاحم', d: 'بدون سقف تعداد استفاده روزانه، بدون واترمارک، بدون ثبت‌نام اجباری.' },
    ],
    aboutClosing: 'Qelvexa هنوز در روزهای ابتدایی رشد خودش است، ولی هدفش این است که به یکی از ابزارهایی تبدیل شود که هر ماه هزاران کاربر فارسی‌زبان و انگلیسی‌زبان برای کارهای روزمره فایل و عکس‌شان به آن اعتماد می‌کنند.',
  },
  en: { tagline: 'Fast, private file and image tools', sub: 'Everything runs in your browser. Nothing is uploaded and there is no sign-up.', drop: 'Drop files here or choose them', run: 'Start', download: 'Download', busy: 'Working…', quality: 'Quality', qrPh: 'Enter text or a link', need: 'Add a file or text first', fail: 'Could not process this file. Check it and try again.', how: 'How to use it', steps: ['Choose your files.', 'Press Start.', 'Download the result.'], privacy: 'Your files are never uploaded. All processing happens in your browser.', lang: 'فارسی', theme: 'Change theme', from: 'From page', to: 'To page', width: 'Width', height: 'Height', format: 'Output format', shamsi: 'Shamsi', gregorian: 'Gregorian', year: 'Year', month: 'Month', day: 'Day', convert: 'Convert', result: 'Result', faqTitle: 'Frequently asked questions', allTools: 'All tools', home: 'Home', about: 'About Qelvexa',
    badge: 'FREE • PRIVATE • BROWSER-BASED', heroTitle: 'Simple tools.', heroTitle2: 'Professional results.', heroText: 'Convert, compress and transform your files right in your browser. No sign-up, no upload, no unnecessary complexity.', tryNow: 'Try it now', viewAll: 'View all tools',
    aboutTitle: 'About Us | Qelvexa',
    aboutBody: 'Qelvexa is a collection of free online tools for working with PDF files and images, where all processing happens directly in your browser — meaning no file is ever uploaded to any server.',
    aboutMission: 'Our mission is simple: build tools any student, employee, seller, or office worker can use to get things done in seconds, with no sign-up, no intrusive ads, and no worry about where their files end up. Every Qelvexa tool is built to be fast, to work well on both phone and laptop, and to install as a PWA app on iPhone, Android, Windows, and Mac.',
    aboutValues: [
      { t: 'Real privacy', d: 'Your file never leaves your device. This is not a marketing line — it is verifiable in the site\'s code.' },
      { t: 'Speed', d: 'No server-side processing queue means results arrive almost instantly.' },
      { t: 'No annoying limits', d: 'No daily usage cap, no watermark, no forced sign-up.' },
    ],
    aboutClosing: 'Qelvexa is still in its early days, but its goal is to become one of the tools thousands of Persian- and English-speaking users trust every month for their everyday file and image tasks.',
  },
};
