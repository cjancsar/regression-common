import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

/**
 * The `DTO` for sorting options
 */
export class SortingOptionsDto {
  @ApiProperty({
    description:
      'A field to sort the results by; `ASC` is the default sort order, `DESC` is indicated by prefixing an "-" character to the property'
  })
  @IsOptional()
  sortBy?: string
}
