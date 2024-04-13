function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-4xl font-bold mb-8 text-center mt-5">Bernardo de la Sierra Rábago</header>
      
      <div className="max-w-4xl w-full bg-white shadow-md rounded-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
        <ul className="space-y-2">
          <li><a href="tel:+522312052221" className="text-blue-500">Teléfono: +52 231 205 2221</a></li>
          <li><a href="mailto:bdelasierrar@gmail.com" className="text-blue-500">Email: bdelasierrar@gmail.com</a></li>
          <li><a href="www.linkedin.com/in/bernardo-de-la-sierra" className="text-blue-500">LinkedIn</a></li>
          <li><a href="github.com/Bdelas777" className="text-blue-500">GitHub</a></li>
        </ul>
      </div>

      <div className="max-w-4xl w-full bg-white shadow-md rounded-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Educación</h2>
        <p className="mb-2">B.S. en Ciencias de la Computación en el Tecnológico de Monterrey</p>
        <p>Graduación Esperada: Junio 2025</p>
      </div>

      <div className="max-w-4xl w-full bg-white shadow-md rounded-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
        <p className="mb-2">Lenguajes y Tecnologías: HTML, CSS, JavaScript, TypeScript, SwiftUI, MongoDB, GitHub, React, Prisma, Vue.js, Node.js, Docker, Express, Firebase, Flutter, VisionOS, Java, Sprint</p>
        <p>Soft Skills: Trabajo en Equipo, Liderazgo, Resolución de Problemas, Adaptabilidad, Empatía, Curiosidad</p>
      </div>

      <div className="max-w-4xl w-full bg-white shadow-md rounded-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Participación en Concursos</h2>
        <ul className="space-y-2">
          <li>HackMTY-Financial Analysis Project (Sept 2023): Desarrollo de un proyecto de análisis financiero impulsado por IA, enfocado en la aplicación web utilizando React, PostgreSQL y TensorFlow.</li>
          <li>SwiftTec- Vicepresidente (May 2022-May 2023): Responsable de promover Swift a través de eventos y clases.</li>
        </ul>
      </div>

      <div className="max-w-4xl w-full bg-white shadow-md rounded-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experiencia de Trabajo Voluntario</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Proyecto</th>
                <th className="px-4 py-2">Descripción</th>
                <th className="px-4 py-2">Periodo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">MAEWebPlatform Development</td>
                <td className="border px-4 py-2">Empowering Student Academic Mentorship: Lideró la creación de un sitio web centrado en el usuario para la administración del programa de mentoría académica para estudiantes en el Tecnológico de Monterrey.</td>
                <td className="border px-4 py-2">Ago 2023 - Presente</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Proyecto 99</td>
                <td className="border px-4 py-2">Backend Development Project: Desarrollo del backend para la implementación de un sistema integral para registros de clases.</td>
                <td className="border px-4 py-2">Dic 2022 - Feb 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-4xl w-full bg-white shadow-md rounded-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Nombre del Proyecto</th>
                <th className="px-4 py-2">Descripción</th>
                <th className="px-4 py-2">Periodo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">TECuido</td>
                <td className="border px-4 py-2">Aplicación de Asistente Médico para iOS: Ingeniería de una innovadora aplicación de asistente médico para iOS para personas con problemas auditivos, publicada en la App Store.</td>
                <td className="border px-4 py-2">Sep 2023 - Ene 2024</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">AcrossMexico</td>
                <td className="border px-4 py-2">Aplicación Educativa: Desarrollo de un videojuego que muestra la cultura mexicana basado en experiencias personales.</td>
                <td className="border px-4 py-2">Ene 2024 - Feb 2024</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ArVis</td>
                <td className="border px-4 py-2">Aplicación de Visión Arquitectónica: Desarrollo de una aplicación de visión arquitectónica para estudiantes utilizando VisionPro, UnityPro y Blender que permite a los estudiantes ver sus modelos arquitectónicos 3D con una definición mejorada.</td>
                <td className="border px-4 py-2">Feb 2024 - Presente</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Vita</td>
                <td className="border px-4 py-2">Aplicación de Salud: Desarrollo de Vita, una aplicación centrada en la salud que aborda preocupaciones de nutrición, ejercicio y sueño en respuesta a los desafíos de obesidad en México.</td>
                <td className="border px-4 py-2">Nov 2023 - Presente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <footer className="mt-8">
        <p>Contáctame:</p>
        <ul className="flex space-x-4">
          <li><a href="tel:+522312052221" className="text-blue-500">Teléfono</a></li>
          <li><a href="mailto:bdelasierrar@gmail.com" className="text-blue-500">Email</a></li>
          <li><a href="www.linkedin.com/in/bernardo-de-la-sierra" className="text-blue-500">LinkedIn</a></li>
          <li><a href="github.com/Bdelas777" className="text-blue-500">GitHub</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
