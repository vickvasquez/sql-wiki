function formatDateToLong(date: string) {
  return new Date(date).toLocaleDateString('es-MX', {
    dateStyle: 'long',
  })
}

export default formatDateToLong
