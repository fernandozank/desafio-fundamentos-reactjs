const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(new Date(value));

export default formatDate;
