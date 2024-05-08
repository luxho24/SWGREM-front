const Layaut = (props) => {
  return (
    <>
        <section className="w-5/6 mx-auto px-8 pt-10 bg-stone-400">
            {props.children}
        </section>
    </>
    
  )
}

export default Layaut;