import React from 'react'
import './TutorialComponent.css'

export const TutorialComponent = () => {
  return (
    <div className="text-white">
          <h1>¡Aprendamos sobre Redes Neuronales!</h1>
          <p>Las redes neuronales son como cerebros de computadora que aprenden a hacer cosas, ¡como jugar a un juego o reconocer imágenes!</p>

          <h2>¿Qué es una Red Neuronal?</h2>
          <p>Imagina que tu cerebro está formado por muchas pequeñas "neuronas" que trabajan juntas para pensar y aprender. Las redes neuronales funcionan de una forma parecida. Son sistemas que aprenden de ejemplos para hacer predicciones o decisiones.</p>

          <h2>Partes de una Red Neuronal</h2>
          <ul>
            <li><strong>Neuronas:</strong> Son como pequeños cerebros dentro de la red.</li>
            <li><strong>Entradas:</strong> Los datos que le damos a la red (por ejemplo, una foto o un número).</li>
            <li><strong>Capas:</strong> Las neuronas están organizadas en capas. ¡Cada capa hace su trabajo para aprender más!</li>
            <li><strong>Salidas:</strong> Es lo que la red predice o decide después de aprender.</li>
          </ul>

          <h2>¡Veamos cómo funciona!</h2>
          <p>Vamos a jugar con una red neuronal para que veas cómo aprende.</p>

          {/* Aquí puedes agregar un gráfico o una simulación interactiva de una red neuronal */}
          <div className="simulation">
            <p>Simulación de red neuronal (¡en este caso puede ser un juego o imagen interactiva!)</p>
          </div>

          <h2>Conceptos Clave</h2>
          <p>En la siguiente parte del tutorial, vamos a usar ejemplos divertidos para ver cómo se entrenan las redes neuronales. ¿Estás listo?</p>

          <button>Empezar</button>
          </div>
  )
}
