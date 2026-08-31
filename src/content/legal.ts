import type { Localised } from './types';
import type { LegalDoc } from '@/lib/nav';

export interface LegalDocument {
  /**
   * Drafted from observable facts about how the site and storefront operate.
   * MUST be reviewed and approved by the business (and ideally counsel) before
   * this flips to true. Until then the page renders a review notice.
   */
  reviewed: boolean;
  title: Localised<string>;
  body: Localised<string[]>;
}

/**
 * The old site listed all four of these in its navigation and footer and served
 * a blank page for each, while a Meta Pixel fired on every page view. Blank
 * pages are the bug being fixed here; unreviewed text shipped as authoritative
 * policy would be a different bug, so drafts are labelled as drafts.
 */
export const LEGAL_DOCUMENTS: Record<LegalDoc, LegalDocument> = {
  privacy: {
    reviewed: false,
    title: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
    body: {
      ar: [
        'نجمع البيانات التي تزوّدنا بها عند إتمام الطلب: الاسم، ورقم الهاتف، والبريد الإلكتروني، وعنوان التوصيل. نستخدمها لتنفيذ طلبك والتواصل معك بشأنه فقط.',
        'تُعالَج المدفوعات عبر مزوّد خدمات الدفع SkipCash. لا نحتفظ ببيانات بطاقتك على خوادمنا في أي وقت.',
        'تُدار منصة المتجر والطلبات عبر منصتي، ويجري تخزين بيانات الطلب لديها وفق شروطها.',
        'يستخدم الموقع أدوات قياس من ميتا لفهم أداء الحملات. لا تعمل هذه الأدوات إلا بعد موافقتك، ويمكنك سحب الموافقة في أي وقت.',
        'يحق لك طلب نسخة من بياناتك أو تصحيحها أو حذفها. للتواصل بشأن الخصوصية، يرجى مراسلتنا عبر صفحة التواصل.',
      ],
      en: [
        'We collect the details you give us at checkout: your name, phone number, email address and delivery address. We use them to fulfil your order and to contact you about it, and for nothing else.',
        'Payments are processed by SkipCash, our payment services provider. We never hold your card details on our own systems.',
        'The store and order platform is operated by Mnasati, and order data is stored with them under their terms.',
        'This site uses Meta measurement tools to understand campaign performance. They load only after you consent, and you can withdraw consent at any time.',
        'You may request a copy of your data, ask us to correct it, or ask us to delete it. Please reach us through the contact page for any privacy request.',
      ],
    },
  },
  terms: {
    reviewed: false,
    title: { ar: 'الشروط والأحكام', en: 'Terms & Conditions' },
    body: {
      ar: [
        'باستخدامك هذا الموقع وإتمام الطلب عبر متجرنا، فإنك توافق على هذه الشروط.',
        'تُعرض جميع الأسعار بالريال القطري وتشمل الضرائب المطبّقة إن وُجدت. نحتفظ بحق تعديل الأسعار وتوافر المنتجات دون إشعار مسبق.',
        'يُعد الطلب مؤكدًا عند إتمام الدفع أو تأكيد الدفع عند الاستلام. نحتفظ بحق رفض أي طلب أو إلغائه مع إعادة المبلغ كاملًا.',
        'جميع المحتويات والعلامات والتصاميم في هذا الموقع مملوكة لوَطَر للعطور ولا يجوز استخدامها دون إذن كتابي.',
      ],
      en: [
        'By using this site and placing an order through our store, you agree to these terms.',
        'All prices are shown in Qatari Riyal and include any applicable taxes. We may change prices and product availability without prior notice.',
        'An order is confirmed once payment is completed, or once a cash-on-delivery order is confirmed. We may decline or cancel any order and will refund it in full.',
        'All content, marks and designs on this site belong to WATR Perfumes and may not be used without written permission.',
      ],
    },
  },
  returns: {
    reviewed: false,
    title: { ar: 'سياسة الإسترجاع', en: 'Return Policy' },
    body: {
      ar: [
        'لأسباب تتعلق بالسلامة والنظافة، لا يمكن استرجاع العطور بعد فتح غلافها الأصلي أو إزالة التغليف الواقي.',
        'إذا وصلك المنتج تالفًا أو مختلفًا عمّا طلبت، يرجى التواصل معنا خلال ٤٨ ساعة من الاستلام مع صور توضّح الحالة، وسنستبدله أو نعيد قيمته كاملة.',
        'تُعاد المبالغ بالطريقة نفسها التي تم الدفع بها، وقد تستغرق عدة أيام عمل حسب مزوّد الدفع أو البنك.',
      ],
      en: [
        'For safety and hygiene reasons, fragrances cannot be returned once the original seal is broken or the protective wrapping has been removed.',
        'If your order arrives damaged or is not what you ordered, please contact us within 48 hours of delivery with photographs, and we will replace it or refund it in full.',
        'Refunds are issued to the original payment method and may take several working days to appear, depending on your payment provider or bank.',
      ],
    },
  },
  shipping: {
    reviewed: false,
    title: { ar: 'سياسة الشحن', en: 'Shipping Policy' },
    body: {
      ar: [
        'نوصّل داخل دولة قطر. تُجهَّز الطلبات عادةً خلال يوم عمل واحد من تأكيدها.',
        'يُرسَل تأكيد بالطلب عبر الرسائل النصية أو البريد الإلكتروني، ويجري التنسيق معك على موعد التوصيل.',
        'يرجى التأكد من صحة رقم الهاتف وتفاصيل العنوان عند الطلب، إذ قد يؤدي نقصها إلى تأخير التوصيل.',
      ],
      en: [
        'We deliver within Qatar. Orders are usually prepared within one working day of confirmation.',
        'You will receive confirmation by SMS or email, and we will arrange a delivery time with you.',
        'Please make sure your phone number and address details are correct at checkout, as incomplete details can delay delivery.',
      ],
    },
  },
};
