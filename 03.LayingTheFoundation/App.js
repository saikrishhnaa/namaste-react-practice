import ReactDOM from 'react-dom/client';

const ele = <h2>Hello world!</h2>;

// we can write things carefree inside JSX interpolation, it filters the content and remove malicious or non safe things and renders, it prevents XSS attacks
const ele1 = (<div>
        <div>
                {123124 + 12312434} 
                {ele}
                New Hello World!
        </div>
</div>);

const Component = () => <h1>Component</h1>;
const Component1 = () => (<div>
        <div>
                <h1>Component1</h1>
                {ele1}
                <Component />
        </div>
</div>);

const Component2 = () => {
        return (
                <div>
                        <h1>Component2</h1>
                        {Component1()}
                </div>
        );
};

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component> </Component>); // this works
root.render(Component()); // this works
root.render(<Component2 />); // this works
// root.render(ele1); // this works

// root.render(<h1>Check</h1>); // this works
