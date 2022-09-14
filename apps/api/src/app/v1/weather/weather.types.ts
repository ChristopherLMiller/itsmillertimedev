import { ApiProperty } from '@nestjs/swagger';

export class WeatherLocationDto {
  @ApiProperty({
    name: 'position',
    description: 'Position in format of "lat,lon"',
    example: '38.8937336,-77.0846156',
    required: true,
  })
  position: string;
}

export class WeatherCurrentDto {
  @ApiProperty({
    name: 'cwa',
    description: 'Weather office',
    example: 'KWAK',
    required: true,
  })
  cwa: string;
  @ApiProperty({
    name: 'gridX',
    description: 'Grid X',
    example: '0',
    required: true,
  })
  gridX: string;
  @ApiProperty({
    name: 'gridY',
    description: 'Grid Y',
    example: '0',
    required: true,
  })
  gridY: string;
}

export class WeatherZoneDto {
  @ApiProperty({
    name: 'zone',
    description: 'Zone ID (5 character string)',
    example: 'ILC179',
    required: true,
  })
  zone: string;
}

export class WeatherAlertDto {
  @ApiProperty({
    name: 'alert',
    description: 'Array of active alerts',
  })
  alerts: Array<object>;
}
