import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap"

const Test = () => {
    /*const Matrix = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]*/

    const [N,setN] = useState(4);

    const [Matrix,setMatrix] = useState([]);
    

    const [A,setA] = useState(2);
    const [Tables,setTable] = useState([]);
    const fill2DimensionsArray = (arr, rows, columns) => {
        for (var i = 0; i < rows; i++) {
            arr.push([0])
            for (var j = 0; j < columns; j++) {
                arr[i][j] = 0;
            }
        }
    }

    const calculate = () =>{
        var a = [];
        fill2DimensionsArray(a, N, N);
        console.log(a);
        for(var i=0;i<N;i++){
            for(var j=0;j<N;j++){
                a[i][j]=document.getElementById(""+i+j).value;
                console.log(a);
                console.log("a["+i+"]["+j+"] = "+a[i][j]);
            }
        }
        console.log(a);
        setTable(<Container>
            {a.map((element,index)=>{
            var i = index;
            return(
                <Table>
                    <tr key={i}>
                    {a[i].map((e,index)=>{
                    return(
                        <td>
                            <h1>{e}</h1>
                        </td>
                    )
                    })}
                    </tr>
                </Table>
            )
        })}
        </Container>)
    }

    return(
        <Container>
            <h1>input NxN</h1>
            <input onChange={e=>{
                setN(e.target.value)
                setMatrix(new Array(parseInt(e.target.value)).fill( new Array(parseInt(e.target.value)).fill(0)))
                }}></input>
            <Container>
                {Matrix.map((element,index)=>{
                    var i = index;
                    return(
                        <Table>
                            <tr key={i}>
                            {Matrix[i].map((e,index)=>{
                            return(
                                <td>
                                    <h1>{i}{index}</h1>
                                    <input id={""+i+index}/>
                                </td>
                            )
                            })}
                            </tr>
                        </Table>
                    )
                })}
                <Button onClick={calculate}>calculate</Button>
            </Container>
            {/*<h1>input number to show</h1>
            <input onChange={e=>{setA(e.target.value)}} ></input>
            <h1>{A}</h1>*/}
            {Tables}
        </Container>
    )
}

export default Test