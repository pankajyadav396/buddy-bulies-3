import { Container } from "react-bootstrap"
import { Accordion } from "react-bootstrap"
const Faq = () => {
    return (
        <div className=' bg-blue py-4' id='faq'>
            <Container>
                <h3 className="fs-xl1 fw-medium text-white lh-136 text-center m-0 pb-5 ">FAQs</h3>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="mt-2">
                        <Accordion.Header className="acc-crd fs-md1 fw-medium ff-montserrat text-white">What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className="fs-sm1 fw-medium opcity-7 text-white ff-montserrat mx-764">
                            Hac varius turpis sit pulvinar lorem magna velit
                            sit.
                            Dapibus mattis
                            adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat
                            neque
                            turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mt-2">
                        <Accordion.Header className="acc-crd fs-md1 fw-medium ff-montserrat text-white">What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className="fs-sm1 fw-medium opcity-7 text-white ff-montserrat mx-764">
                            Hac varius turpis sit pulvinar lorem magna velit
                            sit.
                            Dapibus mattis
                            adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat
                            neque
                            turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mt-2">
                        <Accordion.Header className="acc-crd fs-md1 fw-medium ff-montserrat text-white">What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className="fs-sm1 fw-medium opcity-7 text-white ff-montserrat mx-764">
                            Hac varius turpis sit pulvinar lorem magna velit
                            sit.
                            Dapibus mattis
                            adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat
                            neque
                            turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="mt-2">
                        <Accordion.Header className="acc-crd fs-md1 fw-medium ff-montserrat text-white">What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className="fs-sm1 fw-medium opcity-7 text-white ff-montserrat mx-764">
                            Hac varius turpis sit pulvinar lorem magna velit
                            sit.
                            Dapibus mattis
                            adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat
                            neque
                            turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
               
            </Container>
        </div>
    )
}

export default Faq