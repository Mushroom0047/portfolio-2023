import '../../src/index.css'
import { Col, Container, Row } from 'react-bootstrap'

export const PrivacyPolicyUpperLower = () => {
    return (
        <>
            <Container className='py-5'>
                <Row className='px-5'>
                    <h1 className='text-center'>Privacy Policy</h1>
                    <h2 className='text-center'>Upper Lower Extension</h2>
                    <br />
                    <br />
                    <p>Effective Date: 31-10-2023</p>
                    <p>
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, and share your information when you use our Chrome application, which has been developed to enhance your browsing experience. By using our application, you agree to the practices described in this Privacy Policy.
                    </p>
                    <h2 className="mt-5"><b>Collection and Use of Information</b></h2>
                    <ol>
                        <li>
                            <b>Chrome Permissions:</b>
                            <p>Our application uses contextMenus, activeTab, scripting, and storage permissions to improve functionality and user experience. These permissions are used as follows:</p>
                            <ul>
                                <li>
                                    <b>contextMenus:</b>
                                    <p>Allows the creation of contextual menu items to interact with the current web page.</p>
                                </li>
                                <li>
                                    <b>activeTab:</b>
                                    <p>Is used to access the active browser tab and run scripts in it to provide additional functionality.</p>
                                </li>
                                <li>
                                    <b>scripting:</b>
                                    <p>Used to inject scripts into web pages to enhance functionality.</p>
                                </li>
                                <li>
                                    <b>storage:</b>
                                    <p>Stores data locally in your browser to provide features like custom settings.</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <b>Personal Data:</b>
                            <p>We do not collect or store personally identifiable information through our application.</p>
                        </li>        
                    </ol>
                    <h2 className="mt-5"><b>Sharing Information</b></h2>
                    <p>We do not share the information collected through our application with third parties.</p>
                    <h2 className="mt-5"><b>Data Security</b></h2>
                    <p>We take measures to protect the information collected through our application and to ensure its security. However, please be aware that no internet transmission or electronic storage method is entirely secure, and we cannot guarantee the absolute security of your data.</p>
                    <h2 className="mt-5"><b>Changes to the Privacy Policy</b></h2>
                    <p>We reserve the right to update or modify this Privacy Policy at any time. We recommend reviewing this policy periodically to stay informed about how we are safeguarding your information.</p>
                    <h2 className="mt-5"><b>Contact</b></h2>
                    <p>If you have any questions about this Privacy Policy or our privacy practices, 
                    please feel free to get in touch with us at 
                    <a href="mailto:contacto@hectorvaldesm.com" target="blank"> contacto@hectorvaldesm.com</a>.</p>

                </Row>
            </Container>
        </>
    )
}
