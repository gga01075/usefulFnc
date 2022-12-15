import classes from "../styles/layout/Container.module.css"
import FormatCamelCase from "../pages/functions/textFormat/FormatCamelCase";


const Container = () => {
    return (
        <section className={classes.container}>
              <FormatCamelCase />
        </section>
    )
}

export default Container;