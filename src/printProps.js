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