
## react deom

### 01.初识react

```
    var data={ 
        title:'你好：react', 
        herf:'http://reactjs.cn/react/docs/getting-started.html' 
    }

    //组件
    var ItemComponent = React.createClass({ 
        render:function (){ 
            return (
                <div>
                    <p>{this.props.title}</p>
                </div>
            ) 
        } 
    })

    //渲染函数
    ReactDOM.render(
        <ItemComponent {...data}/>, 
        document.getElementById('box'), 
        ()=>{ console.log('ReactDOM,执行完毕') } 
    )
```

### 02.初识react

```
	var arr = [<p key="1">Hello world!</p>,<p key="2">React is awesome</p>]
	var names = ['Alice', 'Emily', 'Kate']
	
	//渲染2
	ReactDOM.render(
	    <div>
	        {arr}
	        <ul>
	            {
	              names.map(function (name, index) {
	                return <li key={index}>{index} . {name}!</li>
	              })
	            }
	        </ul>
	    </div> 
	    ,document.getElementById('box2')
	)
	
	
	//渲染2
	ReactDOM.render(
	    <span>  直接通过渲染函数渲染dom </span>,
	    document.getElementById('box1') 
	)

```


### 03.组件参数传递: props,插销式

```
    ReactDOM.render(
        <Item1 {...data}/>, 
        document.getElementById('box')
    );


	//插销
	return(
            <div>
                <h3> 插销：接收参数 this.props.children</h3>
                <p>
                方法1：React.Children.map()/
                    {
                        React.Children.map(this.props.children, function (item) {
                          return <em>{item} </em>;
                        })
                    }
                </p>
                <p> 方法2：this.props.children.map()/ {ch} </p>
            </div>
        )

    ReactDOM.render(
        <Item2>
            <span>hello</span>
            <span>world</span>
        </Item2>,
        document.getElementById('box2')
    )

```


