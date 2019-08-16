export function toBrazilianDate(date) {
  switch (typeof date) {
    case 'string':
      return new Date(date).toLocaleDateString('pt-BR');
    case 'object':
      return date.toLocaleDateString('pt-BR');
    default:
      return '';
  }
}

export function toLongFormat(date) {
  switch (typeof date) {
    case 'string':
      const result = new Date(date);
      return `${result.getDate()} ${abbreviateMonth(
        result.getMonth()
      )}, ${result.getFullYear()}`;
    case 'object':
      return `${date.getDate()} ${abbreviateMonth(
        date.getMonth()
      )}, ${date.getFullYear()}`;
    default:
      return '';
  }
}

export function toDayAndMonth(date) {
  switch (typeof date) {
    case 'string':
      const result = new Date(date);
      return `${result.getDate()} ${abbreviateMonth(result.getMonth())}`;
    case 'object':
      return `${date.getDate()} ${abbreviateMonth(date.getMonth())}`;
    default:
      return '';
  }
}

function abbreviateMonth(month) {
  switch (month) {
    case 0:
      return 'Jan';
    case 1:
      return 'Fev';
    case 2:
      return 'Mar';
    case 3:
      return 'Abr';
    case 4:
      return 'Mai';
    case 5:
      return 'Jun';
    case 6:
      return 'Jul';
    case 7:
      return 'Ago';
    case 8:
      return 'Set';
    case 9:
      return 'Out';
    case 10:
      return 'Nov';
    default:
      return 'Dez';
  }
}
