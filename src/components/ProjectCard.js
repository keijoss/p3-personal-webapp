import { Col } from "react-bootstrap";

export const ProjectCard = ({ school_level, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{school_level}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
