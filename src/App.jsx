import { Card } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Elijah Kato"; // Change to "" to display "Hello, there!"

function App() {
  return (
    <div className=' container fluid '>
      <div className='container justify-content-md-center mt-5'>
        <Card className='shadow-lg'>
          <Image />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Price />
            </Card.Text>
            <Card.Text>
              <Description />
            </Card.Text>
          </Card.Body>
        </Card>

        <div className='mt-3 text-center'>
          <h3>Hello, {firstName ? firstName : "there!"}</h3>
          {firstName && (
            <img
              src='https://www.google.com/imgres?q=avatar&imgurl=https%3A%2F%2Fyt3.googleusercontent.com%2FqGrcViAdsmfdL8NhR03s6jZVi2AP4A03XeBFShu2M4Jd88k1fNXDnpMEmHU6CvNJuMyA2z1maA0%3Ds900-c-k-c0x00ffffff-no-rj&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCN_u5w69V9wUZYG8WeJWuNg&docid=2fSlbBonVTYyiM&tbnid=0jSmFSRF0dGAtM&vet=12ahUKEwivt9vb6OaNAxUSxQIHHcGHNOoQM3oECC0QAA..i&w=900&h=900&hcb=2&ved=2ahUKEwivt9vb6OaNAxUSxQIHHcGHNOoQM3oECC0QAA'
              alt='Greeting'
              width="20%"
              className='rounded-circle mt-3'
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
