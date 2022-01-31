import setfuego from '../img/setfuego.jfif';
import setagua from '../img/setagua.jfif';
import setaire from '../img/setaire.jfif';
import settierra from '../img/settierra.jfif';
import velaspastillero from '../img/velaspastillero.jfif';
import constelaciones from '../img/constelaciones.jfif';
import velaschakras from '../img/velaschakras.jfif';
import sietechakras from '../img/7chakras.jfif';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';

const productos = [
    {id: "1", nombre: "🔥 Set Fuego 🔥", texto: "Aries - Sagitario - Leo<br>Para este set elegimos aromas intensos y seductores, todos acompañados de su constelación o sus características generales de cada signo<br>Frasco: $400 c/u<br>Pastillero: $300 c/u", precio: 300, stock: 8, img: setfuego},
    {id: "2", nombre: "🌊 Set Agua 🌊", texto: "Piscis - Cancer - Escorpio<br>Para este set elegimos aromas suaves y relajantes, todos acompañados por su constelación o características generales de cada signo<br>Frasco: $400 c/u<br>Pastillero: $300 c/u", precio: 300, stock: 7, img: setagua},
    {id: "3", nombre: "🌬 Set Aire 🌬", texto: "Géminis - Libra - Acuario<br>Para este set elegimos aromas florales y refrescantes, todos acompañados por su constelación o características generales de cada signo<br>Frasco: $400 c/u<br>Pastillero: $300 c/u", precio: 300, stock: 10, img: setaire},
    {id: "4", nombre: "🍂 Set Tierra 🍂", texto: "Virgo - Tauro - Capricornio<br>Para este set elegimos aromas dulces e intensos, todos acompañados por su constelación o características generales de cada signo<br>Frasco: $400 c/u<br>Pastillero: $300 c/u", precio: 300, stock: 5, img: settierra},
    {id: "5", nombre: "🌸 Velas Pastillero Florales 🌸", texto: "Vienen con distintos diseños florales y aromas variados. Por su tamaño son fáciles de transportar y muy estéticas. Ideales para decorar y perfumar tus espacios, o para hacer un lindo regalito!<br>$300 c/u", precio: 300, stock: 6, img: velaspastillero},
    {id: "6", nombre: "✨ Velas Pastillero Constelaciones ✨", texto: "Estos nuevos pastilleros tienen un diseño floral de cada constelación según el signo que elijas, tienen un tamaño ideal, son fáciles de transportar y súper estéticos. Perfectos para hacer un regalo.<br>$300 c/u", precio: 300, stock: 10, img: constelaciones},
    {id: "7", nombre: "☀️ Chakra Plexo Solar ☀️", texto: "Son ideales para practicar meditación ya que sus aromas fueron elegidos específicamente para liberar y renovar energía<br>$400 c/u", precio: 400, stock: 6, img: velaschakras},
    {id: "8", nombre: "🕯 Velas 7 Chakras 🕯", texto: "Son ideales para practicar meditación ya que sus aromas fueron elegidos específicamente para liberar y renovar energía según la parte del cuerpo a trabajar a partir del chakra elegido.<br>$400 c/u", precio: 400, stock: 5, img: sietechakras},
];  

export default productos;
