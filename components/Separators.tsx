const Asterisks = ({
  margin = '1.5rem auto 1rem',
  textAlign = 'center',
} : { margin?: string, textAlign?: 'left' | 'right' | 'center' | 'justify' }) => <div style={{ margin, textAlign }}>***</div>
export { Asterisks }