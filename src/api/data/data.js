const options = [
  { key: "hombre", value: "Masculino", text: "Masculino" },
  { key: "mujer", value: "Femenino", text: "Femenino" },
];
const contriesOptions = [
  { key: "Baja California", value: "Baja California", text: "Baja California" },
  {
    key: "Baja California Sur",
    value: "Baja California Sur",
    text: "Baja California Sur",
  },
  { key: "Campeche", value: "Campeche", text: "Campeche" },
  { key: "Coahuila", value: "Coahuila", text: "Coahuila" },
  { key: "Colima", value: "Colima", text: "Colima" },
  { key: "Chiapas", value: "Chiapas", text: "Chiapas" },
  { key: "Chihuahua", value: "Chihuahua", text: "Chihuahua" },
  { key: "Durango", value: "Durango", text: "Durango" },
  {
    key: "Distrito Federal",
    value: "Distrito Federal",
    text: "Distrito Federal",
  },
  { key: "Guanajuato", value: "Guanajuato", text: "Guanajuato" },
  { key: "Hidalgo", value: "Hidalgo", text: "Hidalgo" },
  { key: "Jalisco", value: "Jalisco", text: "Jalisco" },
  { key: "México", value: "México", text: "México" },
  { key: "Morelos", value: "Morelos", text: "Morelos" },
  { key: "Nayarit", value: " Nayarit", text: "Nayarit" },
  { key: "Nuevo León", value: "Nuevo León", text: "Nuevo León" },
  { key: "Oaxaca", value: "Oaxaca", text: "Oaxaca" },
  { key: "Puebla", value: "Puebla", text: "Puebla" },
  { key: "Querétaro", value: "Querétaro", text: "Querétaro" },
  { key: "Quintana Roo", value: "Quintana Roo", text: "Quintana Roo" },
  { key: "San Luis Potosí", value: "San Luis Potosí", text: "San Luis Potosí" },
  { key: "Sinaloa", value: "Sinaloa", text: "Sinaloa" },
  { key: "Sonora", value: "Sonora", text: "Sonora" },
  { key: "Tabasco", value: "Tabasco", text: "Tabasco" },
  { key: "Tamaulipas", value: "Tamaulipas", text: "Tamaulipas" },
  { key: "Tlaxcala", value: "Tlaxcala", text: "Tlaxcala" },
  { key: "Veracruz", value: "Veracruz", text: "Veracruz" },
  { key: "Yucatán", value: "Yucatán", text: "Yucatán" },
  { key: "Zacatecas", value: "Zacatecas", text: "Zacatecas" },
];
const statusOptions = [
  { key: "Disponible", value: "Disponible", text: "Disponible" },
  { key: "En consulta", value: "En consulta", text: "En consulta" },
  { key: "No disponible", value: "No disponible", text: "No disponible" },
];

const specialtiesOptions = [
  { key: "General", value: "General", text: "General" },
  { key: "Cardiólogo", value: "Cardiólogo", text: "Cardiólogo" },
  {
    key: "Cirujano plástico",
    value: "Cirujano plástico",
    text: "Cirujano plástico",
  },
  { key: "Dermatólogo", value: "Dermatólogo", text: "Dermatólogo" },
  {
    key: "Gastroenterólogo",
    value: "Gastroenterólogo",
    text: "Gastroenterólogo",
  },
  { key: "Geriatra", value: "Geriatra", text: "Geriatra" },
  { key: "Ginecólogo", value: "Ginecólogo", text: "Ginecólogo" },
  { key: "Neurólogo", value: "Neurólogo", text: "Neurólogo" },
  { key: "Nutriólogo", value: "Nutriólogo", text: "Nutriólogo" },
  { key: "Oftalmólogo", value: "Oftalmólogo", text: "Oftalmólogo" },
  { key: "Oncólogo", value: "Oncólogo", text: "Oncólogo" },
  {
    key: "Otorrinolaringólogo",
    value: "Otorrinolaringólogo",
    text: "Otorrinolaringólogo",
  },
  { key: "Traumatólogo", value: "Traumatólogo", text: "Traumatólogo" },
  { key: "Urólogo", value: "Urólogo", text: "Urólogo" },
];
const roomsOptions = [
  { key: "1", value: "1", text: "1" },
  { key: "2", value: "2", text: "2" },
  { key: "3", value: "3", text: "3" },
  { key: "4", value: "4", text: "4" },
  { key: "5", value: "5", text: "5" },
  { key: "6", value: "6", text: "6" },
  { key: "7", value: "7", text: "7" },
];
const DateOptions = [
  {
    key: 1,
    value: "12/08/2022 9:00 AM",
    text: "12/08/2022 9:00 AM",
  },
  {
    key: 2,
    value: "12/08/2022 10:00 AM",
    text: "12/08/2022 10:00 AM",
  },
  {
    key: 3,
    value: "12/08/2022 11:00 AM",
    text: "12/08/2022 11:00 AM",
  },
  {
    key: 4,
    value: "12/08/2022 12:00 AM",
    text: "12/08/2022 12:00 AM",
  },
  {
    key: 5,
    value: "12/08/2022 1:00 PM",
    text: "12/08/2022 1:00 PM",
  },
  {
    key: 6,
    value: "12/08/2022 2:00 PM",
    text: "12/08/2022 2:00 PM",
  },
  {
    key: 7,
    value: "12/08/2022 3:00 PM",
    text: "12/08/2022 3:00 PM",
  },
  {
    key: 8,
    value: "12/08/2022 4:00 PM",
    text: "12/08/2022 4:00 PM",
  },
  {
    key: 9,
    value: "12/08/2022 5:00 PM",
    text: "12/08/2022 5:00 PM",
  },
  {
    key: 10,
    value: "15/08/2022 9:00 AM",
    text: "15/08/2022 9:00 AM",
  },
  {
    key: 11,
    value: "15/08/2022 10:00 AM",
    text: "15/08/2022 10:00 AM",
  },
  {
    key: 12,
    value: "15/08/2022 11:00 AM",
    text: "15/08/2022 11:00 AM",
  },
  {
    key: 13,
    value: "15/08/2022 12:00 AM",
    text: "15/08/2022 12:00 AM",
  },
  {
    key: 15,
    value: "15/08/2022 1:00 PM",
    text: "15/08/2022 1:00 PM",
  },
  {
    key: 16,
    value: "15/08/2022 2:00 PM",
    text: "15/08/2022 2:00 PM",
  },
  {
    key: 17,
    value: "15/08/2022 3:00 PM",
    text: "15/08/2022 3:00 PM",
  },
  {
    key: 18,
    value: "15/08/2022 4:00 PM",
    text: "15/08/2022 4:00 PM",
  },
  {
    key: 19,
    value: "15/08/2022 5:00 PM",
    text: "15/08/2022 5:00 PM",
  },
  {
    key: 20,
    value: "16/08/2022 9:00 AM",
    text: "16/08/2022 9:00 AM",
  },
  {
    key: 21,
    value: "16/08/2022 10:00 AM",
    text: "16/08/2022 10:00 AM",
  },
  {
    key: 22,
    value: "16/08/2022 11:00 AM",
    text: "16/08/2022 11:00 AM",
  },
  {
    key: 23,
    value: "16/08/2022 12:00 AM",
    text: "16/08/2022 12:00 AM",
  },
  {
    key: 24,
    value: "16/08/2022 1:00 PM",
    text: "16/08/2022 1:00 PM",
  },
  {
    key: 25,
    value: "16/08/2022 2:00 PM",
    text: "16/08/2022 2:00 PM",
  },
  {
    key: 26,
    value: "16/08/2022 3:00 PM",
    text: "16/08/2022 3:00 PM",
  },
  {
    key: 27,
    value: "16/08/2022 4:00 PM",
    text: "16/08/2022 4:00 PM",
  },
  {
    key: 28,
    value: "16/08/2022 5:00 PM",
    text: "16/08/2022 5:00 PM",
  },
  {
    key: 29,
    value: "17/08/2022 9:00 AM",
    text: "17/08/2022 9:00 AM",
  },
  {
    key: 30,
    value: "17/08/2022 10:00 AM",
    text: "17/08/2022 10:00 AM",
  },
  {
    key: 31,
    value: "17/08/2022 11:00 AM",
    text: "17/08/2022 11:00 AM",
  },
  {
    key: 32,
    value: "17/08/2022 12:00 AM",
    text: "17/08/2022 12:00 AM",
  },
  {
    key: 33,
    value: "17/08/2022 1:00 PM",
    text: "17/08/2022 1:00 PM",
  },
  {
    key: 34,
    value: "17/08/2022 2:00 PM",
    text: "17/08/2022 2:00 PM",
  },
  {
    key: 35,
    value: "17/08/2022 3:00 PM",
    text: "17/08/2022 3:00 PM",
  },
  {
    key: 36,
    value: "17/08/2022 4:00 PM",
    text: "17/08/2022 4:00 PM",
  },
  {
    key: 37,
    value: "17/08/2022 5:00 PM",
    text: "17/08/2022 5:00 PM",
  },
  {
    key: 38,
    value: "18/08/2022 9:00 AM",
    text: "18/08/2022 9:00 AM",
  },
  {
    key: 39,
    value: "18/08/2022 10:00 AM",
    text: "18/08/2022 10:00 AM",
  },
  {
    key: 40,
    value: "18/08/2022 11:00 AM",
    text: "18/08/2022 11:00 AM",
  },
  {
    key: 41,
    value: "18/08/2022 12:00 AM",
    text: "18/08/2022 12:00 AM",
  },
  {
    key: 42,
    value: "18/08/2022 1:00 PM",
    text: "18/08/2022 1:00 PM",
  },
  {
    key: 43,
    value: "18/08/2022 2:00 PM",
    text: "18/08/2022 2:00 PM",
  },
  {
    key: 44,
    value: "18/08/2022 3:00 PM",
    text: "18/08/2022 3:00 PM",
  },
  {
    key: 45,
    value: "18/08/2022 4:00 PM",
    text: "18/08/2022 4:00 PM",
  },
  {
    key: 46,
    value: "18/08/2022 5:00 PM",
    text: "18/08/2022 5:00 PM",
  },
  {
    key: 47,
    value: "19/08/2022 9:00 AM",
    text: "19/08/2022 9:00 AM",
  },
  {
    key: 48,
    value: "19/08/2022 10:00 AM",
    text: "19/08/2022 10:00 AM",
  },
  {
    key: 49,
    value: "19/08/2022 11:00 AM",
    text: "19/08/2022 11:00 AM",
  },
  {
    key: 50,
    value: "19/08/2022 12:00 AM",
    text: "19/08/2022 12:00 AM",
  },
  {
    key: 51,
    value: "19/08/2022 1:00 PM",
    text: "19/08/2022 1:00 PM",
  },
  {
    key: 52,
    value: "19/08/2022 2:00 PM",
    text: "19/08/2022 2:00 PM",
  },
  {
    key: 53,
    value: "19/08/2022 3:00 PM",
    text: "19/08/2022 3:00 PM",
  },
  {
    key: 54,
    value: "19/08/2022 4:00 PM",
    text: "19/08/2022 4:00 PM",
  },
  {
    key: 55,
    value: "19/08/2022 5:00 PM",
    text: "19/08/2022 5:00 PM",
  },
  {
    key: 56,
    value: "22/08/2022 9:00 AM",
    text: "22/08/2022 9:00 AM",
  },
  {
    key: 57,
    value: "22/08/2022 10:00 AM",
    text: "22/08/2022 10:00 AM",
  },
  {
    key: 58,
    value: "22/08/2022 11:00 AM",
    text: "22/08/2022 11:00 AM",
  },
  {
    key: 59,
    value: "22/08/2022 12:00 AM",
    text: "22/08/2022 12:00 AM",
  },
  {
    key: 60,
    value: "22/08/2022 1:00 PM",
    text: "22/08/2022 1:00 PM",
  },
  {
    key: 61,
    value: "22/08/2022 2:00 PM",
    text: "22/08/2022 2:00 PM",
  },
  {
    key: 62,
    value: "22/08/2022 3:00 PM",
    text: "22/08/2022 3:00 PM",
  },
  {
    key: 63,
    value: "22/08/2022 4:00 PM",
    text: "22/08/2022 4:00 PM",
  },
  {
    key: 64,
    value: "22/08/2022 5:00 PM",
    text: "22/08/2022 5:00 PM",
  },
  {
    key: 65,
    value: "23/08/2022 9:00 AM",
    text: "23/08/2022 9:00 AM",
  },
  {
    key: 67,
    value: "12/08/2022 10:00 AM",
    text: "12/08/2022 10:00 AM",
  },
  {
    key: 68,
    value: "23/08/2022 11:00 AM",
    text: "23/08/2022 11:00 AM",
  },
  {
    key: 69,
    value: "23/08/2022 12:00 AM",
    text: "23/08/2022 12:00 AM",
  },
  {
    key: 70,
    value: "23/08/2022 1:00 PM",
    text: "23/08/2022 1:00 PM",
  },
  {
    key: 71,
    value: "23/08/2022 2:00 PM",
    text: "23/08/2022 2:00 PM",
  },
  {
    key: 72,
    value: "23/08/2022 3:00 PM",
    text: "23/08/2022 3:00 PM",
  },
  {
    key: 73,
    value: "23/08/2022 4:00 PM",
    text: "23/08/2022 4:00 PM",
  },
  {
    key: 74,
    value: "23/08/2022 5:00 PM",
    text: "23/08/2022 5:00 PM",
  },
  {
    key: 75,
    value: "24/08/2022 9:00 AM",
    text: "24/08/2022 9:00 AM",
  },
  {
    key: 76,
    value: "24/08/2022 10:00 AM",
    text: "24/08/2022 10:00 AM",
  },
  {
    key: 78,
    value: "24/08/2022 11:00 AM",
    text: "24/08/2022 11:00 AM",
  },
  {
    key: 79,
    value: "24/08/2022 12:00 AM",
    text: "24/08/2022 12:00 AM",
  },
  {
    key: 80,
    value: "24/08/2022 1:00 PM",
    text: "24/08/2022 1:00 PM",
  },
  {
    key: 81,
    value: "24/08/2022 2:00 PM",
    text: "24/08/2022 2:00 PM",
  },
  {
    key: 82,
    value: "24/08/2022 3:00 PM",
    text: "24/08/2022 3:00 PM",
  },
  {
    key: 83,
    value: "24/08/2022 4:00 PM",
    text: "24/08/2022 4:00 PM",
  },
  {
    key: 84,
    value: "24/08/2022 5:00 PM",
    text: "24/08/2022 5:00 PM",
  },
  {
    key: 85,
    value: "25/08/2022 9:00 AM",
    text: "25/08/2022 9:00 AM",
  },
  {
    key: 86,
    value: "25/08/2022 10:00 AM",
    text: "25/08/2022 10:00 AM",
  },
  {
    key: 87,
    value: "25/08/2022 11:00 AM",
    text: "25/08/2022 11:00 AM",
  },
  {
    key: 88,
    value: "25/08/2022 12:00 AM",
    text: "25/08/2022 12:00 AM",
  },
  {
    key: 89,
    value: "25/08/2022 1:00 PM",
    text: "25/08/2022 1:00 PM",
  },
  {
    key: 90,
    value: "25/08/2022 2:00 PM",
    text: "25/08/2022 2:00 PM",
  },
  {
    key: 91,
    value: "25/08/2022 3:00 PM",
    text: "25/08/2022 3:00 PM",
  },
  {
    key: 92,
    value: "25/08/2022 4:00 PM",
    text: "25/08/2022 4:00 PM",
  },
  {
    key: 93,
    value: "25/08/2022 5:00 PM",
    text: "25/08/2022 5:00 PM",
  },
  {
    key: 94,
    value: "25/08/2022 9:00 AM",
    text: "25/08/2022 9:00 AM",
  },
  {
    key: 95,
    value: "25/08/2022 10:00 AM",
    text: "25/08/2022 10:00 AM",
  },
  {
    key: 96,
    value: "25/08/2022 11:00 AM",
    text: "25/08/2022 11:00 AM",
  },
  {
    key: 97,
    value: "25/08/2022 12:00 AM",
    text: "25/08/2022 12:00 AM",
  },
  {
    key: 98,
    value: "25/08/2022 1:00 PM",
    text: "25/08/2022 1:00 PM",
  },
  {
    key: 99,
    value: "25/08/2022 2:00 PM",
    text: "25/08/2022 2:00 PM",
  },
  {
    key: 100,
    value: "25/08/2022 3:00 PM",
    text: "25/08/2022 3:00 PM",
  },
  {
    key: 101,
    value: "25/08/2022 4:00 PM",
    text: "25/08/2022 4:00 PM",
  },
  {
    key: 102,
    value: "25/08/2022 5:00 PM",
    text: "25/08/2022 5:00 PM",
  },
  {
    key: 103,
    value: "26/08/2022 9:00 AM",
    text: "26/08/2022 9:00 AM",
  },
  {
    key: 104,
    value: "26/08/2022 10:00 AM",
    text: "26/08/2022 10:00 AM",
  },
  {
    key: 105,
    value: "26/08/2022 11:00 AM",
    text: "26/08/2022 11:00 AM",
  },
  {
    key: 106,
    value: "26/08/2022 12:00 AM",
    text: "26/08/2022 12:00 AM",
  },
  {
    key: 107,
    value: "26/08/2022 1:00 PM",
    text: "26/08/2022 1:00 PM",
  },
  {
    key: 108,
    value: "26/08/2022 2:00 PM",
    text: "26/08/2022 2:00 PM",
  },
  {
    key: 109,
    value: "26/08/2022 3:00 PM",
    text: "26/08/2022 3:00 PM",
  },
  {
    key: 110,
    value: "26/08/2022 4:00 PM",
    text: "26/08/2022 4:00 PM",
  },
  {
    key: 111,
    value: "26/08/2022 5:00 PM",
    text: "26/08/2022 5:00 PM",
  },
  {
    key: 112,
    value: "29/08/2022 9:00 AM",
    text: "29/08/2022 9:00 AM",
  },
  {
    key: 113,
    value: "29/08/2022 10:00 AM",
    text: "29/08/2022 10:00 AM",
  },
  {
    key: 114,
    value: "29/08/2022 11:00 AM",
    text: "29/08/2022 11:00 AM",
  },
  {
    key: 115,
    value: "29/08/2022 12:00 AM",
    text: "29/08/2022 12:00 AM",
  },
  {
    key: 116,
    value: "29/08/2022 1:00 PM",
    text: "29/08/2022 1:00 PM",
  },
  {
    key: 117,
    value: "29/08/2022 2:00 PM",
    text: "29/08/2022 2:00 PM",
  },
  {
    key: 118,
    value: "29/08/2022 3:00 PM",
    text: "29/08/2022 3:00 PM",
  },
  {
    key: 119,
    value: "29/08/2022 4:00 PM",
    text: "29/08/2022 4:00 PM",
  },
  {
    key: 120,
    value: "29/08/2022 5:00 PM",
    text: "29/08/2022 5:00 PM",
  },
  {
    key: 121,
    value: "30/08/2022 9:00 AM",
    text: "30/08/2022 9:00 AM",
  },
  {
    key: 122,
    value: "30/08/2022 10:00 AM",
    text: "30/08/2022 10:00 AM",
  },
  {
    key: 123,
    value: "30/08/2022 11:00 AM",
    text: "30/08/2022 11:00 AM",
  },
  {
    key: 124,
    value: "30/08/2022 12:00 AM",
    text: "30/08/2022 12:00 AM",
  },
  {
    key: 125,
    value: "30/08/2022 1:00 PM",
    text: "30/08/2022 1:00 PM",
  },
  {
    key: 126,
    value: "30/08/2022 2:00 PM",
    text: "30/08/2022 2:00 PM",
  },
  {
    key: 127,
    value: "30/08/2022 3:00 PM",
    text: "30/08/2022 3:00 PM",
  },
  {
    key: 128,
    value: "30/08/2022 4:00 PM",
    text: "30/08/2022 4:00 PM",
  },
  {
    key: 129,
    value: "30/08/2022 5:00 PM",
    text: "30/08/2022 5:00 PM",
  },
];

const statusOptionsQuotes = [
  { key: "Completa", value: "Completa", text: "Completa" },
  { key: "En proceso", value: "En proceso", text: "En proceso" },
  { key: "Cancelada", value: "Cancelada", text: "Cancelada" },
];

export {
  options,
  contriesOptions,
  statusOptions,
  specialtiesOptions,
  DateOptions,
  roomsOptions,
  statusOptionsQuotes
};
