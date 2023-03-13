import React from "react";

class Cart extends React.Component {
    constructor(){
        super();

        this.state={
            cid:0,
            items:[],
            res:""
        }
    }

    insertFront(){
        this.setState({
            items:[{cid:this.state.cid, content:<input type="text" />, date:Date.now()}, ...this.state.items],
            cid:this.state.cid+1
        }, ()=>{
            console.log(this.state.items);
            this.change();
        })
    }

    insertLast(){
        this.setState({
            items:[...this.state.items, {cid:this.state.cid, content:<input type="text" />, date:Date.now()}],
            cid:this.state.cid+1
        }, ()=>{
            console.log(this.state.items);
            this.change();
        })
    }

    sortasc(){
        var tlist = this.state.items;
        tlist.sort((a, b) => a.cid - b.cid);
        this.setState({
        items: tlist
        }, this.change);

    }

    sortdec(){
        var tlist = this.state.items;
        tlist.sort((a, b) => b.cid - a.cid);
        this.setState({
        items: tlist
        }, this.change);

    }

    change(){
        const res = this.state.items.map((obj, index) => {
            const dateObj = new Date(obj.date);
            const year = dateObj.getFullYear();
            const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
            const day = ('0' + dateObj.getDate()).slice(-2);
            
            return (
                <tr key={obj.cid}>
                    <td>{index}</td>
                    <td>{obj.cid}</td>
                    <td>{obj.content}</td>
                    <td>{`${year}-${month}-${day}`}</td>
                </tr>
              
            );
          });
          
        console.log(this.state.items, res);
        this.setState({
            res:res
        })
    }
    render() {
        return (
            <div className="cart">
                <br />
                <h2>Cart</h2>
                <button onClick={()=>this.insertFront()}>Insert Top</button>
                <button onClick={()=>this.insertLast()}>Insert Bottom</button>
                <button onClick={()=>this.sortdec()}>Order Latest</button>
                <button onClick={()=>this.sortasc()}>Order Earliest</button>
                <br /><br />
                <center>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th>Index</th>
                            <th>ID</th>
                            <th>Content</th>
                            <th>DateTime </th>
                        </tr>
                        {this.state.res}
                    </tbody>
                    <tfoot></tfoot>
                </table>
                </center>
                <br /><br />
            </div>
        )
    }
}

export default Cart;