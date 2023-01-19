import { Service } from "./Service";

import { Col, Row } from "antd";
import { servicesData } from "./data";
import { Heading, Wrapper } from "./styles";

const Services = () => {
  return (
    <Wrapper>
      <Heading>
        Services you can use to verify yourself with 0xKYC token
      </Heading>

      <Row>
        {servicesData.map((service) => {
          return (
            <Col lg={8} md={12} xs={24} key={service.title}>
              <Service
                tags={service.tags}
                title={service.title}
                description={service.description}
                img={service.img}
                href={service.href}
              />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
};

export default Services;
