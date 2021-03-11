export function condition(condition) {
  switch(condition){
    case 'storm':
      return icon = {
        name: 'rainy-outline',
        color: '#1ec9ff'
      };
    case 'snow':
      return icon = {
        name: 'snow-outline',
        color: '#1ec9ff'
      };
    case 'rain':
      return icon = {
        name: 'rainy-outline',
        color: '#1ec9ff'
      };
    case 'clear_day':
      return icon = {
        name: 'partly-sunny-outline',
        color: '#ffb300'
      };
    case 'clear_night':
      return icon = {
        name: 'moon-outline',
        color: '#1ec9ff'
      };
    case 'cloudly_night':
      return icon = {
        name: 'cloudy-night-outline',
        color: '#1ec9ff'
      };
    default:
      return icon = {
        name: 'cloud-outline',
        color: '#1ec9ff'
      };
  }
}