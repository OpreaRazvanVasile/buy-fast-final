
import './button.styles.scss'

const CLASS_NAME_BUTTON={
  google:'google-sign-in',
  redirect:'google-redirect',
  inverted:'inverted'
}
const Button=({children,typeButton,...otherProps})=>

<button 
 {...otherProps} className={`button-container ${typeButton?CLASS_NAME_BUTTON[typeButton]:''}`}>{children}</button>

  


export default Button