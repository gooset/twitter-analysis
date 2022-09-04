import React, { useCallback, useEffect, useState } from "react";
// import {useSelector, useDispatch} from 'react-redux';
// import {tweetsModalActions} from '../../store/slices/tweetsModal';
// import tweetsTimeline, {timelineActions} from '../../store/slices/tweetsTimeline';


const Button = ({ className, handleSubmit, type, children }) => {


  // function Example() {

  //   function handleClick(e) {
  //     console.log(e.target.textContent);
  //   }

  return <button className={className} onClick={handleSubmit} type={type}>{children}</button>

}

export default Button;


/////////////////////////////
// import PaginationWrapper from './PaginationWrapper';
// import PaginationButton from './PaginationButton';
// import CLASS_NAMES from 'utils/constants/class-names';
// import { redirect } from "next/dist/server/api-utils";
// import { NavLink } from "react-router-dom";
// import { produceWithPatches } from "immer";

// const CLASS_NAMES = Object.freeze({
//   VISIBLE: 'visible',
//   INVISIBLE: 'invisible',
//   LIGHT: 'light',
//   DARK: 'dark',
//   IMAGE_LOADING_PLACEHOLDER: 'image-loading-placeholder',
//   RATING: 'rating'
// });

// const Pagination = ({
//   className,
//   page,
//   totalPages,
// }) => {
//   <PaginationWrapper className={className}>
//     <PaginationButton


//       ////////////////////////////////////
//       import Media from 'react-media'
//     import {redirect, Route, Switch} from 'react-router-dom'
//     import Person from './Person'
//     import PersonList from './PersonList'
//     import people from './people'

// const PeopleContainer = () => {
//   return (
//     <Media
//       queries={{
//         small: '(max-width: 700px)',
//       }}
//     >
//       {(size) =>
//         size.small ? (
//           <Switch>
//             <Route path="/people/:id">
//               <Person />
//             </Route>
//             <PeopleList />
//           </Switch>
//         ) : (
//           <div style={{ display: 'flex' }}>
//             <PersonList />
//             <Switch>
//               <Route path="/people/:id">
//                 <Person />
//               </Route>
//               <PeopleList />
//             </Switch>
//             ): (
//             <div style={{ display: 'flex' }}>
//               <PeopleList />
//               <Switch>
//                 <Route path="/people/:id">
//                   <Person />
//                 </Route>
//                 <PeopleList />
//               </Switch>
//               )
// /*   </div></div> * /
// import {useState} from 'react'
//       import People from './People'
//       import Offices from './Offices'

//       import './About.css'

// const OldAbout = () => {
//   const [tabId, setTabId] = useState('people')

//       return (
//       <div className="About">
//         <div className="About-tabs">
//           <div
//             onClick={() => setTabId('people')}
//             className={
//               tabId === 'people' ? 'About-tab-active' : 'About-tab'
//             }
//           >
//             People 
//           </div>
//         </div
//         onClick={() => setTabId('offices')}
//         className={
//           tabId === 'offices' ? 'About-tab active': 'About-tab'
//       }
//         >
//           Offices
//           </div>
//         </div>
//         {tabId}


// <NavLink to="/about/people"
//           className="About-tab"
//           activeClassName="active">
//           People
//           </NavLink>
//           <NavLink to="/about/offices"
//           className="About-tab"
//           activeClassName="active">
//           Offices
//           </NavLink>

// ////////////////////
// import React, { useEffect, useState } from 'react'
// const Important = () => {
//   const initialValue = 'Initial value'

//   const [data, setData] = useState(initialValue)
//   const [dirty, setDirty] = useState(false)

//   useEffect(() => {
//     if (data !== initialValue) {
//       setDirty(true)
//     }
//   }, [data, initialValue])

//   return (
//     <div className="Important">
//       <textarea
//         onChange={(evt) => setData(evt.target.value)}
//         cols={40}
//         rows={12}
//       > {data}
//       </textarea>
//       <br />
//     </div>
//   )


//   import {
//     NavLink,
//     Redirect, 
//     Route,
//     Switch,
//     useLocation,
//   } from 'react-router-dom'

//   import People from './People'
//   import Offices from './Offices'
//   import {
//     CSSTransition,
//     TransitionGroup,
//   } from 'react-trainsition-group'

//   import './About.css'
//   import './fade.css'

//   const About = () => {
//     const location = useLocation()
//     return (
//       <div className="About">
//         <div className="About-tabs">
//           <NavLink
//             to="/about/people"
//             className="About-tab"
//             activeClassName="active"
//             >
//               People 
//             </NavLink>
//             <NavLink
//             to="/about/offices"
//             className="About-tab"
//             activeClassName="active"
//             >
//               Offices
//             </NavLink>
//       </div>
//       <TransitionGroup className="About-tabContent">
//         <CSSTransition
//         key={location.key}
//         classNames="fade"
//         timeout={500}
// >
//   <Switch location={location}>
//     <Route path="/about/people">
//       <People />
//       </Route path="/about/offices">
//          </Route>
//   </Switch>
//   </TransitionGroup>


// //////////////////////
// import { useState } from 'react'
// import SecurityContext from './SecurityContext'

// const SecurityProvider = (props) => { 
//   const [loggedIn, setLoggedIn] = useState(false)
//   return (
//     <SecurityContext.Provider
//       value={{
//         login: (username, password) => {
//           if (username === 'fred' && password === 'password') {
//             setLoggedIn(true)
//           }
//         },
//         logout: () => setLoggedIn(false),
//         loggedIn,
//       }}
//       >
//         {props.children} 
//       </SecurityContext.Provider>
//   )
// }

// export default SecurityProvider 

// /////////////////////
// import SecurityContext from './SecurityContext'
// import { useContext } from 'react'

// const useSecurity = () => useContext(SecurityContext)

// export default useSecurity 

// /////////////////
// import Login from './Login'
// import { Route } from 'react-router-dom'
// import useSecurity from './useSecurity'

// const SecureRoute = (props) => {
//   const { loggedIn } = useSecurity()

//   return (
//     <Route {...props}>{loggedIn ? props.children :
//       <Login />}</Route>
//   )
//     }
//     export default SecureRoute


// ///////////Managing state//////////////////
// {
//   items: ['1', '2', '3', '4', '5', null],
//   complete: true
// }

// import reducer form './reducer'

// describe('reducer', () => {
//   it('should be able to move 1 down if gap below', () => {
//     let state = {
//       items: ['1', '2', '3', '4', '5', null],
//     }
//     state = reducer(state, { type: 'move', payload: 0 })
//     expect(state.items).toEqual([
//       null,
//       '2',
//     ])

//   function trySwap(newItems, position, t) {
//     if (newItems[t] === null) {
//       const temp = newItems[position]
//       newItems[position] = newItems[t]
//       newItems[t] = temp
//     }
//   }

//   function arraysEqual(a, b) {
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         return false 
//       }
//     }
//   }

// const [state, dispatch] = useReducer(reducer, {
//   items: ['4', '1', '2', '7'],
// })


// ///////////
// <button className='Puzzle-shuffle'
//   onClick={() => dispatch({type: 'shuffle'})}>Shuffle</button>

// import lodash from 'lodash'
// const undo = (reducer) => (state, action) => {
//   let {
//     undoHistory = [],
//     undoActions = [],
//     ...innerState
//   } = lodash.cloneDeep(state)
//   switch (action.type) {
//     case 'undo': {
//       if (undoActions.length > 0) {
//         undoActions.pop()
//         innerState = undoHistory.pop()
//       }
//       break
//   }

//   case 'redo': {
//     if (undoActions.length > 0) {
//       undoHistory = [...undoHistory, { ...innerState }]
//       undoActions = [
//         ...undoActions,
//         undoActions[undoActions.length -1],
//       ]
//       innerState = reducer(
//         innerState,
//         undoActions[undoActions.length - 1]
//       )
//   }
//   break

//   default: {
//     undoHistory = [...undoHistory, { ...innerState }]
//     undoActions = [...undoActions, action]
//     innerState = reducer(innerState, action)
//     }
//     }
//   return { ...innerState, undoHistory, undoActions }
// }
// export default undo

// ////////////////////
// import { createContext } from 'react'
// const FormContext = createContext({})
// export default FormContext


// import React, { useCallback, useEffect, useState } from 'react'
// import './SimpleForm.css'
// import FormContext from './FormContext'

// function updateWith(oldValue, field, value) {
//   const newValue = { ...oldValue }
//   newValue[field] = value
//   return newValue 
// }

// const SimpleForm = ({ children, value, onChange, onValid }) => {
//   const [values, setValues] = useState(value || {})

//   useEffect(() => {
//     setValues(value || {})
//   }, [value])

//   useEffect(() => {
//     if (onChange) {
//       onChange(values)
//     }
//   }, [onChange, values])

// let setValue = useCallback(
//   (field, v) => setValues((vs) => updateWith(vs, field, v)),
//   [setValues]
// )
// let getValue = useCallback((field) -> values[field], [values])
// let form = {
//   setValue: setValue,
//   value: getValue,
// }
// return (
//   <div className="SimpleForm-container">
//     <FormContext.Provider value={form}>
//       {children}
//     </FormContext.Provider>
//   </div>
// )

// ////////
// import React, { useContext } from 'react'
// import FormContext from './FormContext'
// import './InputField.css'
// const InputField = (props) => {
//   const form = useContext(FormContext)
//   if (!form.value) {
//     return 'InputField should be wrapped in a form'
//   }
// const { name, label, ...otherProps } = props
// const value = form.value(name)

// return (
//   <div className="InputField">
//     <label htmlFor={name}>{label || name}:</label>
//     <input 
//       id={name}
//       value={value || ''}
//       onChange={(event) => {
//         form.setValue(name, event.target.value)
//       }}
//       {...otherProps}
//       />{' '}
//       {}
//   </div>
// )
//     }
// export default InputField


// <label htmlFor={name}>{label || name}:</label>
// <input
//   id={name}
//   value={value || ''}
//   onChane={(event) => {
//     form.setValue(name, event.target.value)
//   }}
//   {...otherProps}
//   />{' '}
//   {}
//   </div>
//   )
//   }


// //
// import { useCallback, useEffect, useState } from 'react'
// import FormContext from './FormContext'
// import './SimpleForm.css'

// const SimpleForm = ({ children, value, onChange, onValid }) => {
//   const [values, setValues] = useState(value || {})
//   const [dirtyFields, setDirtyFields] = useState({})
//   const [invalidFields, setInvalidFields] = useState({})

//   useEffect(() => {
//     setValues(value || {}),
//   }, [value])

//   useEffect(() => {
//     if (onChange) {
//       onChange(values)
//     }
//   }, [onChange, values])

//   useEffect(() => {
//     if (onValid) {
//       onValid(
//         Object.keys(invalidFields).every((i) => !invalidFields[i]),
//         invalidFields 
//       )
//     }, [onValid, invalidFields])
  
//   const setValue = useCallback(
//     (field, v) => setValues((vs) => ({...vs, [field]: v })),
//     [setValues]
//   )
//   const getValue = useCallback((field) => values[field], [values])
//   const setDirty = useCallback(
//     (field) => setDirtyFields((df) => setDirtyFields((df) => ({...df, [field]: true })),
//     [setDirtyFields]
//     )
//   const getDirty = useCallback(
//     (field) => Object.keys(dirtyFields).includes(field),
//     [dirtyFields] 
//   )
//   const setInvalid = useCallback(
//     (field, error) => {
//       setInvalidFields((i) => ({
//         ...i,
//         [field]: error ? error : undefined,
//       })}, [setInvalidFields])
//   )

//   const form = {
//     setValue: setValue,
//     value: getValue,

//     setDirty: setDirty,
//     isDirty: getDirty,
//     setInvalid: setInvalid,
//   }
//   return (
//     <div className="SimpleForm-container">
//       <FormContext.Provider value={form}>
//         {children}
//       </FormContext.Provider>
//     </div>
//   )

// export default SimpleForm
// }

// //////////
// import { useContext, useEffect, useState } from 'react'
// import FormContext from './FormContext'

// import './InputField.css'
// const splitCamelCase = (s) => 

// ///////////////////////////
// import clsx from 'clsx';
// import withTheme from 'utils/hocs/withTheme';
// const CLASS_NAME = 'annotation';

// const Annotation = ({
//   theme, 
//   className,
//   ...rest
// }) => (
//   <>
//     <p 
//       className={clsx(CLASS_NAME, className)}
//       {...rest} />
//   </>
// )

// import Router from 'next/router';
// import Button from 'components/UI/Button';
// import ArrowLeftIcon from 'public/assets/svgs/icons/arrow-left.svg';

// const BackButton = props => (
//   <Button
//     contained
//     title='Back'
//     onClick={Router.back}
//     startIcon={
//       <ArrowLeftIcon
//         fill='currentColor'
//         width='1em' />
//     }
// )

// ////////////////////
// const Modal = ({
//   theme,
//   opened, 
//   onClose,
//   className,
//   title,
//   body,
//   footer,
//   ...rest
// }) => {
//   const ref = useRef(null);
//   useClickAway(ref, () => {
//     onClose(); 
//   });

// }



// const Modal = ({
//   theme,
//   opened, 
//   onClose,
//   className,
//   title,
//   body,
//   footer,
//   ...rest
// }) => {
//   const ref = useRef(null);
//   useClickAway(ref, () => {
//     onClose();
//   });
//   return (
//     <>
//     <Backdrop opened={opened}>
//       <div
//       ref={ref}
//       className={clsx(MODAL_CLASS_NAME, className)}
//       {...rest}>
//         {title && (
//           <div className={MODAL_HEADER_CLASS_}
//         )}
//       </div>
//     </Backdrop>
//     </>
//   )
// }