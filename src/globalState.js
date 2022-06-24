import { action, observable, toJS } from "mobx";

export const globalState = observable({
  language: "uz",
  searchInputsObject: {},
  searchInputsQuestion: "",
  searchfields: [],
  tableOrder: [
    {
      content_table_id: 99951,
      text: "id_person",
      label: "id_person",
      select: false,
      checked: true
    },
    {
      content_table_id: 9992,
      text: "first_name_last_name",
      label: "Familiyasi, ismi, otasining ismi",
      select: false,
      checked: true
    },
    {
      content_table_id: 3,
      text: "age_of_full_life",
      label: "To'liq yashagan yoshi",
      select: false,
      checked: true
    },
    {
      content_table_id: 99931,
      text: "your_date_of_birth",
      label: "Tug'ilgan sanangiz?",
      select: false,
      checked: true
    },
    {
      content_table_id: 70,
      text: "gender",
      label: "Jinsi",
      select: true,
      checked: true
    },
    {
      content_table_id: 37,
      text: "are_you_married",
      label: "Nikoh qurganmisiz?",
      select: true,
      checked: true
    },
    {
      content_table_id: 38,
      text: "marital_status",
      label: "Nikoh holatingiz?",
      select: true,
      checked: true
    },
    {
      content_table_id: 48,
      text: "income_for_living",
      label: "Yashash uchun daromad manbalaringizni ko'rsating",
      select: true,
      checked: true
    },
    {
      content_table_id: 31,
      text: "apartment_currently_live_in_since_you_were_born",
      label: "Mazkur aholi punktida tug'ilganingizdan beri yashaysizmi?",
      select: true,
      checked: true
    },
    {
      content_table_id: 34,
      text: "another_country_after_september_1991",
      label:
        "Boshqa mamlakatda 1991-yil sentabr oyidan keyin uzluksiz bir yil va undan ortiq muddatda yashaganmisiz (bo'lganmisiz)?",
      select: true,
      checked: true
    },
    {
      content_table_id: 27,
      text: "lives_at_the_time_of_the_census",
      label: "Aholini ro'yxatga olish vaqtida qayerda yashaydi",
      select: true,
      checked: true
    },
    {
      content_table_id: 63,
      text: "currently_studying",
      label: "Hozirda ta'lim olasizmi?",
      select: true,
      checked: true
    },
    {
      content_table_id: 44,
      text: "do_sport",
      label: "Sport bilan shug'ullanasizmi?",
      select: true,
      checked: true
    },
    {
      content_table_id: 28,
      text: "lives_place_permanently_temporarily_or_not_temporarily",
      label: "Ushbu joyda doimiy, vaqtinchalik yashaydi yoki vaqtinchalik yashamaydi",
      select: true,
      checked: true
    },
    {
      content_table_id: 9994,
      text: "first_person_head_of_household",
      label: "Uy xo'jaligida birinchi ko'rsatilgan shaxs (oila boshlig'i) bilan qarindoshlik munosabatingiz?",
      select: false,
      checked: true
    },
    {
      content_table_id: 40,
      text: "forcibly_relocated_or_a_refugee",
      label: "Siz majburiy ko'chirilgan yoki qochoq (maqomida) emasmisiz?",
      select: true,
      checked: true
    },
    {
      content_table_id: 72,
      text: "household_serial_number_residence",
      label: "Bino va xonadon raqami ma’lum",
      select: false,
      checked: true
    },
    {
      content_table_id: 47,
      text: "level_of_education",
      label: "Ta'lim darajangiz",
      select: true,
      checked: true
    },
    {
      content_table_id: 54,
      text: "look_for_a_job_in_october",
      label: "Joriy yilning oktabr oyida ish izlaganmisiz?",
      select: true,
      checked: true
    },
    
    {
      content_table_id: 49,
      text: "monthly_income",
      label: "Bir oydagi daromadingiz qancha?",
      select: true,
      checked: true
    },
    {
      content_table_id: 9996,
      text: "name_of_the_country_born",
      label: "Mamlakat nomini yozing (TUG'ILGAN)",
      select: false,
      checked: false
    },
    {
      content_table_id: 51,
      text: "do_your_main_job",
      label:
        "Qayerda asosiy  mehnat faoliyatingizni olib borasiz (qayerda ishlaysiz)?",
      select: true,
      checked: true
    },
    {
      content_table_id: 9997,
      text: "name_of_the_country_last_living",
      label: "Oxirgi doimiy yaxshagan joyingiz?",
      select: false,
      checked: false
    },
    {
      content_table_id: 9998,
      text: "name_of_the_country_workplace",
      label: "Ish joyingiz qaysi mamlakatda",
      select: false,
      checked: false
    },
    {
      content_table_id: 99981,
      text: "name_of_the_nation",
      label: "Millat nomi",
      select: false,
      checked: false
    },
    {
      content_table_id: 99910,
      text: "name_of_the_region_last_location",
      label: "Mintaqaning so'nggi joylashuvi",
      select: false,
      checked: true
    },
    {
      content_table_id: 99911,
      text: "name_of_the_region_last_location_soato",
      label: "Mintaqaning nomi oxirgi joy soato",
      select: false,
      checked: true
    },
    {
      content_table_id: 99912,
      text: "name_place_of_birth",
      label: "Tug'ilgan joy nomi",
      select: false,
      checked: true
    },
    {
      content_table_id: 41,
      text: "nationality",
      label: "Millatingiz",
      select: false,
      checked: true
    },
    {
      content_table_id: 42,
      text: "native_language",
      label: "Ona tilingiz?",
      select: true,
      checked: true
    },
    {
      content_table_id: 99913,
      text: "number_of_live_births",
      label: "Tirik tug'ilganlar soni",
      select: false,
      checked: true
    },
    {
      content_table_id: 99914,
      text: "operator_name",
      label: "Operator",
      select: false,
      checked: false
    },
    {
      content_table_id: 99915,
      text: "other_country_name",
      label: "Boshqa mamlakat nomi",
      select: false,
      checked: false
    },
    {
      content_table_id: 50,
      text: "paid_or_income_generating_job",
      label:
        "Joriy yilning 24-31 oktabr kunlari ish haqi to'lanadigan yoki daromad keltiradigan ish bilan mashg'ul bo'lganmisiz?",
      select: true,
      checked: true
    },
    {
      content_table_id: 99916,
      text: "period_residence_number_of_months",
      label: "Oylarning davri yashash soni",
      select: false,
      checked: false
    },
    {
      content_table_id: 99917,
      text: "place_of_birth_soato",
      label: "Tug'ilgan joy soato",
      select: false,
      checked: true
    },
    {
      content_table_id: 53,
      text: "place_of_work",
      label: "Asosiy ish joyingiz qayerda joylashgan?",
      select: true,
      checked: true
    },
    {
      content_table_id: 62,
      text: "preschool_education_organization",
      label: "Maktabgacha ta'lim tashkiloti turi",
      select: true,
      checked: false
    },
    {
      content_table_id: 58,
      text: "read_and_or_write",
      label: "O'qish va/yoki yozishni bilasizmi?",
      select: true,
      checked: false
    },
    {
      content_table_id: 99918,
      text: "reason_dont_sport",
      label: "NImaga siport bilan shug'ullanmaysiz",
      select: false,
      checked: false
    },
    {
      content_table_id: 56,
      text: "reason_for_not_looking_for_a_job",
      label: "Ish izlamaslik yoki taklif etilgan ishga kirishmaslik sababini ko'rsating",
      select: true,
      checked: true
    },
    {
      content_table_id: 99919,
      text: "serial_number_of_the_main_source_of_income",
      label: "Daromadlarning asosiy manbasining seriya raqami",
      select: false,
      checked: false
    },
    {
      content_table_id: 1,
      text: "serial_number_respondents",
      label: "Turar joy kimning mulki?",
      select: true,
      checked: true
    },
    {
      content_table_id: 999100,
      text: "specify_the_order_number_of_your_parent",
      label: "Ota-onangizning tartibi raqamini belgilang",
      select: false,
      checked: true
    },
    {
      content_table_id: 99920,
      text: "sport_place",
      label: "Sport maydoni",
      select: false,
      checked: false
    },
    {
      content_table_id: 55,
      text: "started_working_within_2_weeks",
      label: "Agar sizga ish taklif etilsa, 2 hafta mobaynida ishga kirishgan bo'lar edingizmi?",
      select: true,
      checked: false
    },
    {
      content_table_id: 99921,
      text: "territoria_name_workplace",
      label: "Hudud nomi ish joyi",
      select: false,
      checked: false
    },
    {
      content_table_id: 99922,
      text: "territoria_name_workplace_soato",
      label: "Hudud nomi ish joyi soato",
      select: false,
      checked: false
    },
    {
      content_table_id: 99923,
      text: "territory",
      label: "Hudud",
      select: false,
      checked: true
    },
    {
      content_table_id: 99924,
      text: "territory_name_soato",
      label: "Hudud nomi soato",
      select: false,
      checked: true
    },
    {
      content_table_id: 99925,
      text: "terrotory_name_main",
      label: "Asosiy hudud nomi",
      select: false,
      checked: true
    },
    {
      content_table_id: 99926,
      text: "the_reason",
      label: "Sabab",
      select: false,
      checked: false
    },
    {
      content_table_id: 29,
      text: "the_reason_for_not_living",
      label: "Ushbu joyda vaqtinchalik yashamaslik sababi",
      select: true,
      checked: false
    },
    {
      content_table_id: 99927,
      text: "when_did_you_leave",
      label: "Qachon ketdingiz",
      select: false,
      checked: false
    },
    {
      content_table_id: 32,
      text: "when_did_you_move",
      label: "Qachon ko'chib keldingiz?",
      select: true,
      checked: true
    },
    {
      content_table_id: 99928,
      text: "when_did_you_return",
      label: "Qachon qaytgansiz",
      select: false,
      checked: false
    },
    {
      content_table_id: 45,
      text: "where_do_sport",
      label: "Sport bilan qayerda shug'ullanasiz?",
      select: false,
      checked: true
    },
    {
      content_table_id: 30,
      text: "where_were_you_born",
      label: "Tug'ilgan joyingiz",
      select: true,
      checked: true
    },
    {
      content_table_id: 52,
      text: "who_you_worked_for_in_your_main_job",
      label: "Asosiy ish joyingizda kim bo'lib ishlagansiz?",
      select: true,
      checked: true
    },
    {
      content_table_id: 65,
      text: "why_did_you_leave",
      label: "O'zbekistonga kelishdan maqsadi",
      select: true,
      checked: false
    },
    {
      content_table_id: 46,
      text: "why_dont_do_sports",
      label: "Nima sababdan sport bilan shug'ullanmaysiz?",
      select: true,
      checked: true
    },
    {
      content_table_id: 99929,
      text: "year_name",
      label: "Yil",
      select: false,
      checked: false
    },
    {
      content_table_id: 99930,
      text: "year_month",
      label: "Oy",
      select: false,
      checked: false
    },
    
    {
      content_table_id: 9991,
      text: "academic_degree",
      label: "Ilmiy daraja",
      select: false,
      checked: false
    },
    {
      content_table_id: 4,
      text: "amount",
      label: "Miqdori",
      select: false,
      checked: false
    },
    {
      content_table_id: 35,
      text: "foreign_country_have_you_been",
      label: "Qaysi xorijiy mamlakatda bo'lgansiz?",
      select: true,
      checked: false
    },
    {
      content_table_id: 59,
      text: "have_a_degree",
      label: "Ilmiy darajangiz bormi?",
      select: true,
      checked: false
    },
    {
      content_table_id: 57,
      text: "high_level",
      label: "Oliy ta'lim daraja turi",
      select: true,
      checked: false
    },
    {
      content_table_id: 9993,
      text: "cityzen",
      label: "Fuqaroligingiz?",
      select: false,
      checked: false
    },
    {
      content_table_id: 39,
      text: "country_citizenship",
      label: "Mamlakat nomini yozing (FUQAROLIK)",
      select: true,
      checked: false
    },
    {
      content_table_id: 64,
      text: "current_education",
      label: "Ta'lim turi",
      select: true,
      checked: true
    },
    {
      content_table_id: 415,
      text: "language_name",
      label: "Til nomini yozing",
      select: false,
      checked: false
    },
    {
      content_table_id: 43,
      text: "languages_can_you_speak",
      label: "Qaysi tillarda suhbatlasha olasiz?",
      select: false,
      checked: true
    },
    {
      content_table_id: 33,
      text: "last_permanent_improvement",
      label: "Oxirgi doimiy yashagan joyingiz?",
      select: true,
      checked: false
    },
    {
      content_table_id: 61,
      text: "child_attend_a_preschool",
      label: "Bola bog'chaga boradimi?",
      select: true,
      checked: false
    }
  ],
  deletedRowId: ""
})

export const setTableOrder = action((orderArray) => {
  globalState.tableOrder = orderArray;
})

export const getTableOrder = action(() => {
  return toJS(globalState.tableOrder);
})

export const setSearchInputsObject = action((faild,value) => {
  globalState.searchInputsObject[faild] = (value||"");
  let question = ""
  for (const property in globalState.searchInputsObject) {
    if(globalState.searchInputsObject[property]){
      question = question + `&${property}=${globalState.searchInputsObject[property]}`;
    }
  }
  globalState.searchInputsQuestion = question
})

export const getSearchInputsObject = action(() => {
  return toJS(globalState.searchInputsObject);
})

export const setDeletedRowId = action((id) => {
  globalState.deletedRowId = id;
})

export const getDeletedRowId = action(() => {
  return globalState.deletedRowId;
})

export const setCheckboxed = action((content_table_id, target) => {
  globalState.tableOrder = globalState.tableOrder.map((elem) => {
    if (elem.content_table_id == content_table_id) {
      elem.checked = target
    }
    return elem
  });
})

export const setSearchfields = action((field, value, content_table_id, label) => {
  globalState.searchfields.push({
    content_table_id,
    field,
    value,
    label,
  })
  globalState.searchfields =  getSearchfields();
})

export const deleteSearchfields = action((content_table_id) => {
  globalState.searchfields = globalState.searchfields.filter(elem => elem.content_table_id !== content_table_id)
})

export const getSearchfields = action(() => {
  return toJS(globalState.searchfields)
})

export const searchFieldsToSearchText = action(() => {
  globalState.searchfields.forEach(elem => {
    globalState.searchInputsObject[elem.field] = elem.value
  })
  let question = ""
  for (const property in globalState.searchInputsObject) {
    if(globalState.searchInputsObject[property]){
      question = question + `&${property}=${globalState.searchInputsObject[property]}`;
    }
  }
  globalState.searchInputsQuestion = question
})