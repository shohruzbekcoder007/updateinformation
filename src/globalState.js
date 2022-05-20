import { action, observable, toJS } from "mobx";

export const globalState = observable({
  language: "uz",
  searchInputsObject: {},
  searchInputsQuestion: "",
  tableOrder: [
    {
      content_table_id: 9991,
      text: "academic_degree",
      name_savol: "academic_degree",
      select: false,
    },
    {
      content_table_id: 3,
      text: "age_of_full_life",
      name_savol: "age_of_full_life",
      select: false,
    },
    {
      content_table_id: 4,
      text: "amount",
      name_savol: "amount",
      select: false,
    },
    {
      content_table_id: 34,
      text: "another_country_after_september_1991",
      name_savol:
        "Boshqa mamlakatda 1991-yil sentabr oyidan keyin uzluksiz bir yil va undan ortiq muddatda yashaganmisiz (bo'lganmisiz)?",
      select: true,
    },
    {
      content_table_id: 31,
      text: "apartment_currently_live_in_since_you_were_born",
      name_savol: "Mazkur aholi punktida tug'ilganingizdan beri yashaysizmi?",
      select: true,
    },
    {
      content_table_id: 70,
      text: "gender",
      name_savol: "Jinsi",
      select: true,
    },
    {
      content_table_id: 9992,
      text: "first_name_last_name",
      name_savol: "first_name_last_name",
      select: false,
    },
    {
      content_table_id: 37,
      text: "are_you_married",
      name_savol: "Nikoh qurganmisiz?",
      select: true,
    },
    {
      content_table_id: 61,
      text: "child_attend_a_preschool",
      name_savol: "Bola bog'chaga boradimi?",
      select: true,
    },
    {
      content_table_id: 9993,
      text: "cityzen",
      name_savol: "cityzen",
      select: false,
    },
    {
      content_table_id: 39,
      text: "country_citizenship",
      name_savol: "Fuqaroligingiz?",
      select: true,
    },
    {
      content_table_id: 64,
      text: "current_education",
      name_savol: "Ta'lim turi",
      select: true,
    },
    {
      content_table_id: 63,
      text: "currently_studying",
      name_savol: "Hozirda ta'lim olasizmi?",
      select: true,
    },
    {
      content_table_id: 44,
      text: "do_sport",
      name_savol: "Sport bilan shug'ullanasizmi?",
      select: true,
    },
    {
      content_table_id: 51,
      text: "do_your_main_job",
      name_savol:
        "Qayerda asosiy  mehnat faoliyatingizni olib borasiz (qayerda ishlaysiz)?",
      select: true,
    },
    {
      content_table_id: 9994,
      text: "first_person_head_of_household",
      name_savol: "first_person_head_of_household",
      select: false,
    },
    {
      content_table_id: 40,
      text: "forcibly_relocated_or_a_refugee",
      name_savol: "Siz majburiy ko'chirilgan yoki qochoq (maqomida) emasmisiz?",
      select: true,
    },
    {
      content_table_id: 35,
      text: "foreign_country_have_you_been",
      name_savol: "Qaysi xorijiy mamlakatda bo'lgansiz?",
      select: true,
    },
    {
      content_table_id: 59,
      text: "have_a_degree",
      name_savol: "Ilmiy darajangiz bormi?",
      select: true,
    },
    {
      content_table_id: 57,
      text: "high_level",
      name_savol: "Oliy ta'lim daraja turi",
      select: true,
    },
    {
      content_table_id: 72,
      text: "household_serial_number_residence",
      name_savol: "Bino va xonadon raqami ma’lum",
      select: false,
    },
    {
      content_table_id: 9995,
      text: "id_person",
      name_savol: "id_person",
      select: false,
    },
    {
      content_table_id: 48,
      text: "income_for_living",
      name_savol: "Yashash uchun daromad manbalaringizni ko'rsating",
      select: true,
    },
    {
      content_table_id: 415,
      text: "language_name",
      name_savol: "Til nomini yozing",
      select: false,
    },
    {
      content_table_id: 43,
      text: "languages_can_you_speak",
      name_savol: "Qaysi tillarda suhbatlasha olasiz?",
      select: false,
    },
    {
      content_table_id: 33,
      text: "last_permanent_improvement",
      name_savol: "Oxirgi doimiy yashagan joyingiz?",
      select: true,
    },
    {
      content_table_id: 47,
      text: "level_of_education",
      name_savol: "Ta'lim darajangiz",
      select: true,
    },
    {
      content_table_id: 27,
      text: "lives_at_the_time_of_the_census",
      name_savol: "Aholini ro'yxatga olish vaqtida qayerda yashaydi",
      select: true,
    },
    {
      content_table_id: 28,
      text: "lives_place_permanently_temporarily_or_not_temporarily",
      name_savol: "Ushbu joyda doimiy, vaqtinchalik yashaydi yoki vaqtinchalik yashamaydi",
      select: true,
    },
    {
      content_table_id: 54,
      text: "look_for_a_job_in_october",
      name_savol: "Joriy yilning oktabr oyida ish izlaganmisiz?",
      select: true,
    },
    {
      content_table_id: 38,
      text: "marital_status",
      name_savol: "Nikoh holatingiz?",
      select: true,
    },
    {
      content_table_id: 49,
      text: "monthly_income",
      name_savol: "Bir oydagi daromadingiz qancha?",
      select: true,
    },
    {
      content_table_id: 9996,
      text: "name_of_the_country_born",
      name_savol: "name_of_the_country_born",
      select: false,
    },
    {
      content_table_id: 9997,
      text: "name_of_the_country_last_living",
      name_savol: "name_of_the_country_last_living",
      select: false,
    },
    {
      content_table_id: 9998,
      text: "name_of_the_country_workplace",
      name_savol: "name_of_the_country_workplace",
      select: false,
    },
    {
      content_table_id: 99981,
      text: "name_of_the_nation",
      name_savol: "name_of_the_nation",
      select: false,
    },
    {
      content_table_id: 99910,
      text: "name_of_the_region_last_location",
      name_savol: "name_of_the_region_last_location",
      select: false,
    },
    {
      content_table_id: 99911,
      text: "name_of_the_region_last_location_soato",
      name_savol: "name_of_the_region_last_location_soato",
      select: false,
    },
    {
      content_table_id: 99912,
      text: "name_place_of_birth",
      name_savol: "name_place_of_birth",
      select: false,
    },
    {
      content_table_id: 41,
      text: "nationality",
      name_savol: "Millatingiz",
      select: false,
    },
    {
      content_table_id: 42,
      text: "native_language",
      name_savol: "Ona tilingiz?",
      select: true,
    },
    {
      content_table_id: 99913,
      text: "number_of_live_births",
      name_savol: "number_of_live_births",
      select: false,
    },
    {
      content_table_id: 99914,
      text: "operator_name",
      name_savol: "operator_name",
      select: false,
    },
    {
      content_table_id: 99915,
      text: "other_country_name",
      name_savol: "other_country_name",
      select: false,
    },
    {
      content_table_id: 50,
      text: "paid_or_income_generating_job",
      name_savol:
        "Joriy yilning 24-31 oktabr kunlari ish haqi to'lanadigan yoki daromad keltiradigan ish bilan mashg'ul bo'lganmisiz?",
      select: true,
    },
    {
      content_table_id: 99916,
      text: "period_residence_number_of_months",
      name_savol: "period_residence_number_of_months",
      select: false,
    },
    {
      content_table_id: 99917,
      text: "place_of_birth_soato",
      name_savol: "place_of_birth_soato",
      select: false,
    },
    {
      content_table_id: 53,
      text: "place_of_work",
      name_savol: "Asosiy ish joyingiz qayerda joylashgan?",
      select: true,
    },
    {
      content_table_id: 62,
      text: "preschool_education_organization",
      name_savol: "Maktabgacha ta'lim tashkiloti turi",
      select: true,
    },
    {
      content_table_id: 58,
      text: "read_and_or_write",
      name_savol: "O'qish va/yoki yozishni bilasizmi?",
      select: true,
    },
    {
      content_table_id: 99918,
      text: "reason_dont_sport",
      name_savol: "reason_dont_sport",
      select: false,
    },
    {
      content_table_id: 56,
      text: "reason_for_not_looking_for_a_job",
      name_savol:
        "Ish izlamaslik yoki taklif etilgan ishga kirishmaslik sababini ko'rsating",
      select: true,
    },
    {
      content_table_id: 99919,
      text: "serial_number_of_the_main_source_of_income",
      name_savol: "serial_number_of_the_main_source_of_income",
      select: false,
    },
    {
      content_table_id: 1,
      text: "serial_number_respondents",
      name_savol: "Turar joy kimning mulki?",
      select: true,
    },
    {
      content_table_id: 999100,
      text: "specify_the_order_number_of_your_parent",
      name_savol: "specify_the_order_number_of_your_parent",
      select: false,
    },
    {
      content_table_id: 99920,
      text: "sport_place",
      name_savol: "sport_place",
      select: false,
    },
    {
      content_table_id: 55,
      text: "started_working_within_2_weeks",
      name_savol:
        "Agar sizga ish taklif etilsa, 2 hafta mobaynida ishga kirishgan bo'lar edingizmi?",
      select: true,
    },
    {
      content_table_id: 99921,
      text: "territoria_name_workplace",
      name_savol: "territoria_name_workplace",
      select: false,
    },
    {
      content_table_id: 99922,
      text: "territoria_name_workplace_soato",
      name_savol: "territoria_name_workplace_soato",
      select: false,
    },
    {
      content_table_id: 99923,
      text: "territory",
      name_savol: "territory",
      select: false,
    },
    {
      content_table_id: 99924,
      text: "territory_name_soato",
      name_savol: "territory_name_soato",
      select: false,
    },
    {
      content_table_id: 99925,
      text: "terrotory_name_main",
      name_savol: "terrotory_name_main",
      select: false,
    },
    {
      content_table_id: 99926,
      text: "the_reason",
      name_savol: "the_reason",
      select: false,
    },
    {
      content_table_id: 29,
      text: "the_reason_for_not_living",
      name_savol: "Ushbu joyda vaqtinchalik yashamaslik sababi",
      select: true,
    },
    {
      content_table_id: 99927,
      text: "when_did_you_leave",
      name_savol: "when_did_you_leave",
      select: false,
    },
    {
      content_table_id: 32,
      text: "when_did_you_move",
      name_savol: "Qachon ko'chib keldingiz?",
      select: true,
    },
    {
      content_table_id: 99928,
      text: "when_did_you_return",
      name_savol: "when_did_you_return",
      select: false,
    },
    {
      content_table_id: 45,
      text: "where_do_sport",
      name_savol: "Sport bilan qayerda shug'ullanasiz?",
      select: false,
    },
    {
      content_table_id: 30,
      text: "where_were_you_born",
      name_savol: "Tug'ilgan joyingiz",
      select: true,
    },
    {
      content_table_id: 52,
      text: "who_you_worked_for_in_your_main_job",
      name_savol: "Asosiy ish joyingizda kim bo'lib ishlagansiz?",
      select: true,
    },
    {
      content_table_id: 65,
      text: "why_did_you_leave",
      name_savol: "O'zbekistonga kelishdan maqsadi",
      select: true,
    },
    {
      content_table_id: 46,
      text: "why_dont_do_sports",
      name_savol: "Nima sababdan sport bilan shug'ullanmaysiz?",
      select: true,
    },
    {
      content_table_id: 99929,
      text: "year_name",
      name_savol: "year_name",
      select: false
    },
    {
      content_table_id: 99930,
      text: "year_month",
      name_savol: "year_month",
      select: false
    },
    {
      content_table_id: 99931,
      text: "your_date_of_birth",
      name_savol: "your_date_of_birth",
      select: false
    },
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