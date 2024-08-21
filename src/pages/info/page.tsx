// `app/info/page.tsx` is the UI for the `/info` URL
import styles from  './Home.module.css'

export default function Page() {
    return <div className={styles.container}>
          <button> <a className={styles.a} href="https://brainquestions.netlify.app/">back to quiz page </a></button>
        <h1>braincells info </h1>
        <p>Sources of the info below  are <a className={styles.a} href="https://en.wikipedia.org/wiki/Electroencephalography">wikipedia</a> and <a className={styles.a} href="https://www.mayoclinic.org/tests-procedures/eeg/about/pac-20393875">the mayo clinic </a>
        </p>

        <div className={styles.questionBox}>
    <p> <b className={styles.point}> Q1 </b>
    What is an E.G.G device ? <br></br> 
Device that measures the electrical activity in the brain <br></br>
An EEG is one of the main tests to help diagnose epilepsy. An EEG also can play a role in diagnosing other brain conditions
 </p>
 </div>

 <div className={styles.questionBox}>
 <p><b className={styles.point}> Q2 </b> TMS or transcranial magnetic stimulation  manipulates brain activity by inducing electrical activity in a specific brain areas</p><br></br>
</div>
<div className={styles.questionBox}>
 <p> <b className={styles.point}> Q3 </b> The biosignals detected by EEG have been shown to represent the postsynaptic potentials of pyramidal neurons in the neocortex and allocortex.</p>
 </div>
 <div className={styles.questionBox}>
 <p> <b className={styles.point}> Q4 </b>Postsynaptic potentials are changes in membrane potential that move the cell away from its resting state.</p>
 </div>
 <div className={styles.questionBox}>
 <p> <b className={styles.point} >Q5 </b>  The neocortex, also called the neopallium, isocortex, or the six-layered cortex, is a set of layers of the mammalian cerebral cortex involved in higher-order brain functions such as sensory perception, cognition, generation of motor commands, spatial reasoning and language.</p>
 </div>
 <div className={styles.questionBox}>
 <p> <b className={styles.point}>Q6 </b>Allocortex make smaller part of the brain 10% while neocortex make 90% of the brain</p>
 </div>

 <div className={styles.questionBox}>
 <p> <b  className={styles.point}>Q7 </b>postsynaptic potentials : it is the difference between electric potential between the interior and 
exterior of biological cells </p>
</div>

<div className={styles.questionBox}>
 <p> <b className={styles.point}>Q8 </b> An action potential occurs when the membrane potential of a specific cell rapidly rises and falls. This depolarization then causes adjacent locations to similarly depolarize. Action potentials occur in several types of excitable cells</p>
 </div>
 <div className={styles.questionBox}>
 <p> <b className={styles.point}>Q9 </b> What is mitochondria? 
 it is organelle found in the cytoplasm of almost all eukaryotic cells (cells with clearly defined nuclei), the primary function of which is to generate large quantities of energy in the form of adenosine triphosphate (ATP)</p>
 </div>
 <div className={styles.questionBox}>
 <p> <b className={styles.point}>Q10 </b> Stem cells are found in almost all tissues of the body. And they are needed for the maintenance of tissue as well as for repair after injury</p>
 </div>

 
    </div>
  }
