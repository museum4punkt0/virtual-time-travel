export enum AvailLocales {
  AA = 'aa', // Afar
  AB = 'ab', // Abkhazian
  AF = 'af', // Afrikaans
  AK = 'ak', // Akan
  AM = 'am', // Amharic
  AR = 'ar', // Arabic
  AS = 'as', // Assamese
  AW = 'aw', // Awadhi
  AY = 'ay', // Aymara
  AZ = 'az', // Azerbaijani
  B1 = 'b1', // Bhojpuri
  B2 = 'b2', // Maithili
  BA = 'ba', // Bashkir
  BE = 'be', // Belarussian
  BG = 'bg', // Bulgarian
  BH = 'bh', // Bihari
  BI = 'bi', // Bislama
  BL = 'bl', // Balochi
  BN = 'bn', // Bengali
  BO = 'bo', // Tibetan
  BR = 'br', // Breton
  CA = 'ca', // Catalan
  CB = 'cb', // Cebuano
  CE = 'ce', // Chechen
  CO = 'co', // Corsican
  CS = 'cs', // Czech
  CY = 'cy', // Welsh
  DA = 'da', // Danish
  DE = 'de', // German
  DK = 'dk', // Dakhini
  DZ = 'dz', // Bhutani
  EL = 'el', // Greek
  EN = 'en', // English
  EO = 'eo', // Esperanto
  ES = 'es', // Spanish
  ET = 'et', // Estonian
  EU = 'eu', // Basque
  FA = 'fa', // Persian
  FI = 'fi', // Finnish
  FJ = 'fj', // Fiji
  FO = 'fo', // Faeroese
  FR = 'fr', // French
  FY = 'fy', // Frisian
  GA = 'ga', // Irish
  GD = 'gd', // Scottish Gaelic
  GL = 'gl', // Galician
  GN = 'gn', // Guarani
  GU = 'gu', // Gujarati
  HA = 'ha', // Hausa
  HI = 'hi', // Hindi
  HR = 'hr', // Croatian
  HT = 'ht', // Haitian Creole
  HU = 'hu', // Hungarian
  HY = 'hy', // Armenian
  IA = 'ia', // Interlingua
  IE = 'ie', // Interlingue
  IK = 'ik', // Inupiak
  IN = 'in', // Indonesian
  IS = 'is', // Icelandic
  IT = 'it', // Italian
  IW = 'iw', // Hebrew
  JA = 'ja', // Japanese
  JI = 'ji', // Yiddish
  JW = 'jw', // Javanese
  KA = 'ka', // Georgian
  KB = 'kb', // Kabyle
  KI = 'ki', // Konkani
  KK = 'kk', // Kazakh
  KL = 'kl', // Greenlandic
  KM = 'km', // Khmer
  KN = 'kn', // Kannada
  KO = 'ko', // Korean
  KS = 'ks', // Kashmiri
  KU = 'ku', // Kurdish
  KY = 'ky', // Kirghiz
  LA = 'la', // Latin
  LB = 'lb', // Luxembourgish
  LM = 'lm', // Lombard
  LN = 'ln', // Lingala
  LO = 'lo', // Laothian
  LT = 'lt', // Lithuanian
  LV = 'lv', // Latvian
  MG = 'mg', // Malagasy
  MI = 'mi', // Maori
  MK = 'mk', // Macedonian
  ML = 'ml', // Malayalam
  MN = 'mn', // Mongolian
  MO = 'mo', // Moldavian
  MR = 'mr', // Marathi
  MS = 'ms', // Malay
  MT = 'mt', // Maltese
  MU = 'mu', // Makhuwa
  MW = 'mw', // Marwari
  MY = 'my', // Burmese
  NA = 'na', // Nauru
  NE = 'ne', // Nepali
  NL = 'nl', // Dutch
  NO = 'no', // Norwegian
  OC = 'oc', // Occitan
  OM = 'om', // Oromo
  OR = 'or', // Oriya
  PA = 'pa', // Punjabi
  PL = 'pl', // Polish
  PS = 'ps', // Pashto
  PT = 'pt', // Portuguese
  QU = 'qu', // Quechua
  RI = 'ri', // Rifian
  RM = 'rm', // Rhaeto-Romance
  RN = 'rn', // Kirundi
  RO = 'ro', // Romanian
  RU = 'ru', // Russian
  RW = 'rw', // Kinyarwanda
  SA = 'sa', // Sanskrit
  SD = 'sd', // Sindhi
  SG = 'sg', // Sangro
  SH = 'sh', // Serbo-Croatian
  SI = 'si', // Sinhalese
  SK = 'sk', // Slovak
  SL = 'sl', // Slovenian
  SM = 'sm', // Samoan
  SN = 'sn', // Shona
  SO = 'so', // Somali
  SQ = 'sq', // Albanian
  SR = 'sr', // Serbian
  SS = 'ss', // Siswati
  ST = 'st', // Sesotho
  SU = 'su', // Sundanese
  SV = 'sv', // Swedish
  SW = 'sw', // Swahili
  TA = 'ta', // Tamil
  TE = 'te', // Telugu
  TG = 'tg', // Tajik
  TH = 'th', // Thai
  TI = 'ti', // Tigrinya
  TK = 'tk', // Turkmen
  TL = 'tl', // Tagalog
  TM = 'tm', // Tuareg
  TN = 'tn', // Setswana
  TO = 'to', // Tonga
  TR = 'tr', // Turkish
  TS = 'ts', // Tsonga
  TT = 'tt', // Tatar
  TW = 'tw', // Twi
  TZ = 'tz', // Tamazight
  UG = 'ug', // Uyghur
  UK = 'uk', // Ukrainian
  UR = 'ur', // Urdu
  UZ = 'uz', // Uzbek
  VI = 'vi', // Vietnamese
  VO = 'vo', // Volapuk
  WO = 'wo', // Wolof
  XH = 'xh', // Xhosa
  YO = 'yo', // Yoruba
  ZH = 'zh', // Chinese
  ZU = 'zu', // Zulu
}

export type CurrentLocale = AvailLocales;
export type DefaulLocale = AvailLocales;
export type Locales = Array<LocaleId> | null;

export interface Labels {
  [key: string]: string | Labels;
}

export interface LocaleId {
  slug: string;
  label: string;
  default: boolean;
  labels?: Labels;
}

export type LocalizedKey = {
  [key in AvailLocales]: string;
};
