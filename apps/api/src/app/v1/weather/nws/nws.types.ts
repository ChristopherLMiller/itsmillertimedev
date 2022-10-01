import { ApiProperty } from '@nestjs/swagger';

export class GPSLocationDto {
  @ApiProperty({
    name: 'position',
    description: 'Position in format of "lat,lon"',
    example: '38.8937336,-77.0846156',
    required: true,
  })
  // @todo GPS Validation
  // @body Using as is causes validation to fail with the position being undefined
  //@Validate(GPSLocation)
  position: string;
}
export class WeatherZoneDto {
  @ApiProperty({
    name: 'zone',
    description: 'Zone ID (6 character string)',
    example: 'ILC179',
    required: true,
  })
  zone: string;
}

export class WeatherAlert {
  @ApiProperty({
    name: 'alert',
    description: 'Array of active alerts',
  })
  alerts: Array<any>;
}
