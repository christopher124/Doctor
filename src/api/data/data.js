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
  { key: "12/08/2022", value: "12/08/2022", text: "12/08/2022" },
  { key: "13/08/2022", value: "13/08/2022", text: "13/08/2022" },
  // { key: "14/08/2022", value: "14/08/2022", text: "14/08/2022" },
  { key: "15/08/2022", value: "15/08/2022", text: "15/08/2022" },
  { key: "16/08/2022", value: "16/08/2022", text: "16/08/2022" },
  { key: "17/08/2022", value: "17/08/2022", text: "17/08/2022" },
  { key: "18/08/2022", value: "18/08/2022", text: "18/08/2022" },
  { key: "19/08/2022", value: "19/08/2022", text: "19/08/2022" },
  { key: "20/08/2022", value: "20/08/2022", text: "20/08/2022" },
  // { key: "21/08/2022", value: "21/08/2022", text: "21/08/2022" },
  { key: "22/08/2022", value: "22/08/2022", text: "22/08/2022" },
  { key: "23/08/2022", value: "23/08/2022", text: "23/08/2022" },
  { key: "24/08/2022", value: "24/08/2022", text: "24/08/2022" },
  { key: "25/08/2022", value: "25/08/2022", text: "25/08/2022" },
  { key: "26/08/2022", value: "26/08/2022", text: "26/08/2022" },
  // { key: "27/08/2022", value: "27/08/2022", text: "27/08/2022" },
  { key: "28/08/2022", value: "28/08/2022", text: "28/08/2022" },
  { key: "29/08/2022", value: "29/08/2022", text: "29/08/2022" },
  { key: "30/08/2022", value: "30/08/2022", text: "30/08/2022" },
  { key: "31/08/2022", value: "31/08/2022", text: "31/08/2022" },
];

export {
  options,
  contriesOptions,
  statusOptions,
  specialtiesOptions,
  DateOptions,
  roomsOptions,
};
