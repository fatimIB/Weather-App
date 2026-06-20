import "../Components_style/Footer.css"
import logo from "../assets/PMlogo.JPEG"


function Footer(){

return (

<footer className="footer">


    <div className="footer-section logo-section">

        <img
            src={logo}
            alt="PM Accelerator logo"
        />

    </div>



    <div className="footer-section">

        <h3>
            About PM Accelerator
        </h3>


        <p>
            PM Accelerator is a program that helps aspiring product
            managers develop their skills through mentorship, training,
            and real-world product management experiences.
        </p>


        <a 
        href="https://www.linkedin.com/school/pmaccelerator/"
        target="_blank"
        >
            PM Accelerator LinkedIn
        </a>


    </div>




    <div className="footer-section">


        <h3>
            Developed by
        </h3>


        <p>
            Fatima IBOUBKARNE
        </p>


        <a 
        href="https://linkedin.com/in/fatima-iboubkarne-849675281"
        target="_blank"
        >
            LinkedIn
        </a>


        <a 
        href="https://github.com/fatimIB"
        target="_blank"
        >
            GitHub
        </a>


        <a 
        href="https://fatima-iboubkarne.vercel.app/"
        target="_blank"
        >
            Portfolio
        </a>



    </div>



</footer>


)

}


export default Footer