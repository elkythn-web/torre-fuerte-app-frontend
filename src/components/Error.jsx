import PropTypes from 'prop-types'

const Error = ( {children} ) => {
  return (
    <div className=" bg-red-400 p-2 rounded-lg text-center font-bold text-white mb-4 ">
        {children}
    </div>
  )
}

Error.propTypes = {
    children: PropTypes.node.isRequired
}

export default Error