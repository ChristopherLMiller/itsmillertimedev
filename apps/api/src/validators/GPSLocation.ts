import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'gpsLocation', async: true })
export class GPSLocation implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    console.log(args);
    console.log(`GPS validator: ${text}`);
    if (typeof text !== 'string') return false;

    const index = text.split(',');
    return (
      index.length === 2 &&
      !isNaN(parseFloat(index[0])) &&
      !isNaN(parseFloat(index[1]))
    );
  }

  defaultMessage(args: ValidationArguments) {
    return 'GPS Location must be provided as "lat,lon"';
  }
}
