
export default function About(props) {

    return (
        <>

            <div className='container'>
                <h1 className={`text-${props.mode==='light'?'dark':'white'}`}>About Us</h1>
                <div className={`accordion text-${props.mode==='light'?'dark':'white'}`} id="accordionExample">
                    <div className="accordion-item ">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='light'?'whitesmoke':'gray'}} >
                               <strong> Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseOne"    className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'whitesmoke':'lightgray'}}   >
                            "Our website is completely free to use and accessible to anyone with an internet connection. We believe that everyone should have access to useful tools that can simplify their daily tasks. That's why we've made it our mission to provide a free and reliable word and character counting tool. Whether you're a student, writer, or just someone who needs to quickly count the words or characters in a piece of text, our website is here to help you without any cost. We don't require any registration or login, so feel free to use our tool as many times as you need."
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='light'?'whitesmoke':'gray'}}  >
                            <strong> Case conversion tool </strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse"    data-bs-parent="#accordionExample">
                            <div className="accordion-body"  style={{backgroundColor: props.mode==='light'?'whitesmoke':'lightgray'}} >
                            Our website also includes a case conversion tool that allows you to easily switch between upper and lower case letters in your text. With this tool, you can quickly and easily change the case of your text with just a click of a button. This is particularly useful for writers who need to adhere to specific case requirements in their work, as well as for those who want to make their text more visually appealing by mixing upper and lower case letters. Our case conversion tool is simple, intuitive, and easy to use.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button   className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='light'?'whitesmoke':'gray'}}>
                            <strong> Words and characters counting tool </strong>
                            </button>
                        </h2>
                        <div id="collapseThree"   className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'whitesmoke':'lightgray'}}  >
                            Our website's word counting tool is a powerful and user-friendly way to count the number of words in any text you enter. With our innovative interface, you can easily paste or type in your text and quickly get an accurate word count. This tool is perfect for students, writers, and anyone who needs to keep track of the length of their written work. With our website, you can ensure that your text meets the word count requirements for essays, reports, and other written assignments. <br />
                            In addition to our word counting tool, we also offer a character counting tool that makes it easy to count the number of characters in your text. This tool is particularly useful for those who need to adhere to character limits in their written work, such as Twitter users, email marketers, and other digital communicators. With our character counting tool, you can easily ensure that your text meets the character count requirements for various online platforms.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
