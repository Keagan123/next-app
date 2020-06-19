import Layout from '../components/Layout';

const Contact  = () => (

    <Layout>
        <div>
            <h1>Contact Page</h1>

            <img src="/contact.gif" alt="contact" />
            <p>
                You can contact me on any of the following:

                Email: keagansmather@gmail.com
                Phone: 0718771568

            </p>
        </div>
        <style jsx>{`
            div {
                background-color: blue;
                font-weight: bold;
            }
        `}</style>
    </Layout>
)

export default Contact;