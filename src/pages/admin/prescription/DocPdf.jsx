import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { getOnePrescripApi } from "../../../api/admin/prescription";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import Logo from "../../../assets/img/SB sin fondo.png";
import { Spinner } from "../../../components/spinner/Spinner";
export function DocPdf({ prescription }) {
  const { id } = useParams();
  const [setPrescription] = useState({});

  const {
    doctor,
    customer,
    weight,
    size,
    created_at,
    file_number,
    observations,
    allergies,
    treatment,
  } = prescription;
  const [cargando, setCargando] = useState(true);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const prescription = await getOnePrescripApi(id, logout);
      setPrescription(prescription);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout, auth]);
  function calcularIMC(weight, size) {
    var size;
    var alturaEnMetros = size / 100;
    var weight;

    var imc = Math.round(weight / (alturaEnMetros * alturaEnMetros));
    var clasificacion;

    if (imc < 18.5) {
      clasificacion = "Bajo peso";
    } else if (imc < 25) {
      clasificacion = "Normal";
    } else {
      clasificacion = "Sobrepeso";
    }
    /* Consejo:
   
    */
    var respuesta =
      "Tu  índice de masa corporal es : " + imc + ", " + clasificacion;
    return respuesta;
  }
  function getEdad(birthday) {
    let hoy = new Date();
    let fechaNacimiento = new Date(birthday);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    return edad;
  }

  return cargando ? (
    <Spinner />
  ) : (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.sectionInfo}>
          {" "}
          <Text style={styles.title2}>Receta</Text>
          <Image style={styles.logo} src={Logo} alt="" />
          <View style={styles.image}>
            <Text style={styles.paragraph2}>
              <Text style={styles.paragraph2}>
                {" "}
                {doctor?.gender === "Masculino"
                  ? "Dr."
                  : doctor?.gender === "Femenino"
                    ? "Dra."
                    : null}{" "}
                {doctor?.name ? doctor?.name : "N/A"}{" "}
                {doctor?.last ? doctor?.last : "N/A"}
              </Text>
              {
                "                                                                         "
              }
              <Text style={styles.paragraph2}>Original</Text>
            </Text>
            <Text style={styles.paragraph2}>
              <Text style={styles.paragraph2}>
                {doctor?.specialties ? doctor?.specialties : "N/A"}{" "}
              </Text>
              {"   "}
              <Text style={styles.paragraph2}>
                CED. PROF. PROV.
                <Text style={styles.paragraph2}>PEJ360477</Text>
              </Text>
            </Text>
            <Text style={styles.paragraph2}>
              Arenales 92, Arenales Tapatíos, 45066 Zapopan, Jal.
              {"            "}
              <Text style={styles.paragraph}>
                FECHA Y HORA DE ELABORACIÓN:
                <Text style={styles.paragraph}>
                  {" "}
                  {format(
                    new Date(created_at ? created_at : "No hay datos"),
                    "dd/MM/yyyy hh:mm:ss a"
                  )}
                </Text>
              </Text>
            </Text>
            <Text style={styles.line}>
              _________________________________________________________
            </Text>
            <Text style={styles.paragraph2}>
              NOMBRE:
              <Text style={styles.paragraph2}>
                {" "}
                {customer?.name ? customer?.name : "N/A"}{" "}
                {customer?.last ? customer?.last : "N/A"}
              </Text>
              {
                "                                                                                "
              }
              <Text style={styles.paragraph2}>
                NÚMERO DE EXPEDIENTE:
                <Text style={styles.paragraph2}>
                  {" "}
                  {file_number ? file_number : "N/A"}
                </Text>
              </Text>
            </Text>
            <Text style={styles.paragraph2}>
              GÉNERO:
              <Text style={styles.paragraph2}>
                {" "}
                {customer?.gender ? customer?.gender : "N/A"}
              </Text>
              {"                                                             "}
              <Text style={styles.paragraph2}>
                EDAD:
                <Text style={styles.paragraph2}>
                  {" "}
                  {customer?.birthday
                    ? getEdad(customer?.birthday)
                    : "N/A"}{" "}
                  años{" "}
                </Text>
              </Text>
              {"                               "}
              <Text style={styles.paragraph2}>
                FECHA DE NACIMIENTO:
                <Text style={styles.paragraph2}>
                  {" "}
                  {format(
                    new Date(
                      customer?.birthday ? customer?.birthday : "No hay datos"
                    ),
                    "dd/MM/yyyy"
                  )}
                </Text>
              </Text>
            </Text>
            <Text style={styles.paragraph2}>
              PESO:
              <Text style={styles.paragraph2}>
                {" "}
                {weight ? weight : "N/A"} Kg
              </Text>
            </Text>
            <Text style={styles.paragraph2}>
              TALLA:
              <Text style={styles.paragraph2}> {size ? size : "N/A"} cm </Text>
            </Text>
            <Text style={styles.paragraph2}>
              ALERGIAS:
              <Text style={styles.paragraph2}>
                {" "}
                {allergies ? allergies : "N/A"}{" "}
              </Text>
            </Text>
            <Text style={styles.paragraph2}>
              <Text style={styles.paragraph2}>
                {" "}
                {calcularIMC(weight, size)}{" "}
              </Text>
            </Text>
            <Text style={styles.line}>
              _________________________________________________________
            </Text>
            <Text style={styles.paragraph2}>
              TRATAMIENTO:
              <Text style={styles.paragraph2}>
                {" "}
                {treatment ? treatment : "N/A"}
              </Text>
              {
                "                                                                                                                                                                                                                                                     "
              }
              <Text style={styles.paragraph2}>
                OBSERVACIONES:
                <Text style={styles.paragraph2}>
                  {" "}
                  {observations ? observations : "N/A"}
                </Text>
              </Text>
            </Text>
          </View>
          <View style={styles.sectionPacientes}>
            <Text style={styles.paragraph2}>
              <Text style={styles.paragraph2}>
                FAVOR DE TOMAR EL TRATAMIENTO COMPLETO.
                {"                                                      "}
                <Text style={styles.paragraph2}>
                  FIRMA: ______________________
                </Text>
              </Text>
            </Text>
            <Text style={styles.line}>
              _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
              _ _ _ _ _ _
            </Text>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.sectionInfo}>
          {" "}
          <Text style={styles.title2}>Receta</Text>
          <Image style={styles.logo} src={Logo} alt="" />
          <View style={styles.image}>
            <Text style={styles.paragraph2}>
              <Text style={styles.paragraph2}>
                {" "}
                {doctor?.gender === "Masculino"
                  ? "Dr."
                  : doctor?.gender === "Femenino"
                    ? "Dra."
                    : null}{" "}
                {doctor?.name ? doctor?.name : "N/A"}{" "}
                {doctor?.last ? doctor?.last : "N/A"}
              </Text>
              {
                "                                                                         "
              }
              <Text style={styles.paragraph2}>Copia</Text>
            </Text>
            <Text style={styles.paragraph2}>
              <Text style={styles.paragraph2}>
                {doctor?.specialties ? doctor?.specialties : "N/A"}{" "}
              </Text>
              {"   "}
              <Text style={styles.paragraph2}>
                CED. PROF. PROV.
                <Text style={styles.paragraph2}> PEJ360477</Text>
              </Text>
            </Text>
            <Text style={styles.paragraph2}>
              Arenales 92, Arenales Tapatíos, 45066 Zapopan, Jal.
              {"            "}
              <Text style={styles.paragraph}>
                FECHA Y HORA DE ELABORACIÓN:
                <Text style={styles.paragraph}>
                  {" "}
                  {format(
                    new Date(created_at ? created_at : "No hay datos"),
                    "dd/MM/yyyy hh:mm:ss a"
                  )}
                </Text>
              </Text>
            </Text>
            <Text style={styles.line}>
              _________________________________________________________
            </Text>
            <Text style={styles.paragraph2}>
              NOMBRE:
              <Text style={styles.paragraph2}>
                {" "}
                {customer?.name ? customer?.name : "N/A"}{" "}
                {customer?.last ? customer?.last : "N/A"}
              </Text>
              {
                "                                                                                "
              }
              <Text style={styles.paragraph2}>
                NÚMERO DE EXPEDIENTE:
                <Text style={styles.paragraph2}>
                  {" "}
                  {file_number ? file_number : "N/A"}
                </Text>
              </Text>
            </Text>
            <Text style={styles.paragraph2}>
              GÉNERO:
              <Text style={styles.paragraph2}>
                {" "}
                {customer?.gender ? customer?.gender : "N/A"}
              </Text>
              {"                                                             "}
              <Text style={styles.paragraph2}>
                EDAD:
                <Text style={styles.paragraph2}>
                  {" "}
                  {customer?.birthday
                    ? getEdad(customer?.birthday)
                    : "N/A"}{" "}
                  años{" "}
                </Text>
              </Text>
              {"                               "}
              <Text style={styles.paragraph2}>
                FECHA DE NACIMIENTO:
                <Text style={styles.paragraph2}>
                  {" "}
                  {format(
                    new Date(
                      customer?.birthday ? customer?.birthday : "No hay datos"
                    ),
                    "dd/MM/yyyy"
                  )}
                </Text>
              </Text>
            </Text>
            <Text style={styles.paragraph2}>
              PESO:
              <Text style={styles.paragraph2}>
                {" "}
                {weight ? weight : "N/A"} Kg
              </Text>
            </Text>
            <Text style={styles.paragraph2}>
              TALLA:
              <Text style={styles.paragraph2}> {size ? size : "N/A"} cm </Text>
            </Text>
            <Text style={styles.paragraph2}>
              ALERGIAS:
              <Text style={styles.paragraph2}>
                {" "}
                {allergies ? allergies : "N/A"}{" "}
              </Text>
            </Text>
            <Text style={styles.paragraph2}>
              <Text style={styles.paragraph2}>
                {" "}
                {calcularIMC(weight, size)}{" "}
              </Text>
            </Text>
            <Text style={styles.line}>
              _________________________________________________________
            </Text>
            <Text style={styles.paragraph2}>
              TRATAMIENTO:
              <Text style={styles.paragraph2}>
                {" "}
                {treatment ? treatment : "N/A"}
              </Text>
              {
                "                                                                                                                                                                                                                                                     "
              }
              <Text style={styles.paragraph2}>
                OBSERVACIONES:
                <Text style={styles.paragraph2}>
                  {" "}
                  {observations ? observations : "N/A"}
                </Text>
              </Text>
            </Text>
          </View>
          <View style={styles.sectionPacientes}>
            <Text style={styles.paragraph2}>
              <Text style={styles.paragraph2}>
                FAVOR DE TOMAR EL TRATAMIENTO COMPLETO.
                {"                                                      "}
                <Text style={styles.paragraph2}>
                  FIRMA: ______________________
                </Text>
              </Text>
            </Text>
            <Text style={styles.line}>
              _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
              _ _ _ _ _ _
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
const styles = StyleSheet.create({
  page: { backgroundColor: "#fff" },
  sectionInfo: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "8px",
    width: "100%",
  },
  sectionPacientes: {
    width: "100%",
    backgroundColor: "#fff",
  },
  image: {
    position: "relative",
    height: "480px",
    width: "100%",
  },
  logo: {
    width: "120px",
    height: "120px",
  },
  title2: {
    paddingTop: "8px",
    paddingBottom: "8px",
    fontWeight: "bold",
    color: "#000",
    fontSize: "15px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  line: {
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "10px",
  },
  paragraph: {
    paddingTop: "8px",
    paddingBottom: "8px",
    fontWeight: "bold",
    color: "#000",
    fontSize: "10px",
    paddingLeft: "15px",
  },
  paragraph2: {
    paddingTop: "8px",
    paddingBottom: "8px",
    fontWeight: "bold",
    color: "#000",
    fontSize: "10px",
    textAlign: "left",
    paddingLeft: "15px",
  },
});
