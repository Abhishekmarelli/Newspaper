import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Detailes.css'

const Detailes = () => {
	return (
		<section className="ezy__about18 light">
			<Container>
				<Row>
					<Col xs={12} lg={6}>
						<div className="ezy__about18-image d-flex justify-content-center align-items-center position-relative h-100 w-100">
							{/* <svg className="ezy__about18-shape-one" viewBox="0 0 180 180">
								<path
									fill="var(--ezy-theme-color)"
									d="M13.5,-18.7C16.9,-16.2,18.5,-11.4,23,-5.6C27.5,0.2,34.8,6.9,34.5,12.3C34.3,17.7,26.4,21.6,19.4,23.2C12.4,24.7,6.2,23.8,-0.8,25C-7.9,26.2,-15.8,29.4,-23.3,28C-30.9,26.6,-38.1,20.7,-38.9,13.7C-39.7,6.8,-34,-1.2,-30.2,-8.8C-26.3,-16.4,-24.4,-23.6,-19.6,-25.7C-14.9,-27.8,-7.5,-24.9,-1.2,-23.3C5.1,-21.6,10.2,-21.3,13.5,-18.7Z"
									width="100%"
									height="100%"
									transform="translate(50 50)"
									strokeWidth="0"
									style={{ transition: "all 0.3s ease 0s" }}
									opacity=".2"
								></path>
							</svg> */}

							<div>
								<img
									src="https://cdn.easyfrontend.com/pictures/quiz_1.png"
									alt=""
									className="img-fluid"
								/>
							</div>
						</div>
					</Col>
					<Col xs={12} lg={6} className="mt-5 mt-lg-0">
						<hr className="ezy__about18-divider" />
						<h2 className="ezy__about18-heading my-4">
							Noman Ali Khan's Story
						</h2>
						<p className="mt-5 opacity-75">
							I am a website designer from Lousiana, with a strong focus in
							UI/UX design. I love to get new experiences and always learn from
							my surroundings. I've done more than 285 projects. You can check
							it through portfolio section on this website. I looking forward to
							any opportunities and challenges. Ex velit cupidatat magna
							voluptate deserunt quis et dolor adipisicing elit culpa ad
							exercitation proident irure deserunt irure. I look forward to any
							opportunities and challenges.
						</p>
						<p>
							Do more than is required. What is the distance between someone who
							achieves their goals consistently and those who spend their lives
							and careers following? Lorem ipsum dolor sit amet consectetur
							adipisicing elit. A sequi cumque rem! Illo odit harum aperiam
							reprehenderit, soluta ex explicabo.
						</p>
						<Row>
							<Col xs={12} md={4}>
								<Button variant="" className="ezy__about18-btn mt-4 w-100">
									Read More
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};


export default Detailes