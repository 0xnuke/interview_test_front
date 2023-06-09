import FooterReport from "./FooterReport";
import NavbarReport from "./NavbarReport";

const LayoutReport = ({children,handleClickPage}) => {
    return(
        <div>
            <NavbarReport handleClickPage={handleClickPage}/>
                {children }
            <FooterReport/>
        </div>
    )
}

export default LayoutReport;