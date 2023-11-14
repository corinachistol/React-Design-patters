export const printProps = Component => {
    return  (props) => {
        console.log(props)
        return <Component {...props} />
    }
}

//HOC= components that return another component instead of JSx
// HOC are just functions that return components
// HOc add extra functionality to existing components
// Sharing complex behaviour between multiple components 
// HOC nu se incep cu litera mare ca componentele in REact, pentru ca niciodata nu le afisam in jsx