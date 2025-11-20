import styled from "styled-components";

function NavBottom() {

    const topics = ["Nepal", "Startup", "Innovations", "Finance&Economics", "Geopolitics"];
    
    return (
        <Bottom>

        
        <Boss>
            {
                topics.map((value, index) => 
                    <Options href="#" key={index}>{value}</Options>
                )
            }
        </Boss>
        </Bottom>
    );

}

export default NavBottom;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
`

const Boss = styled.div`
    
    height: 40px;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
`;

const Options = styled.a`
    text-decoration: none;
    color: black;
    
    padding: 6px 12px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 500;
    transition: color 0.5;

    &:hover {
        color: red;
  }

`







