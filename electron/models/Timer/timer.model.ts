/* Thirds-party  Import */
import {
  Table,
  Model,
  Scopes,
  Column,
  DataType,
  Is,
  BeforeUpdate,
  PrimaryKey,
  DefaultScope,
} from 'sequelize-typescript';
/* Scopes Import */
import { TimerScopes } from '../scopes';
import { TimerDefaultScope } from '../default-scopes';
/* Validations Import */
import { IsNumeric } from '../validations';

@DefaultScope(() => TimerDefaultScope())
@Scopes(() => TimerScopes())
@Table({
  timestamps: false,
  tableName: 'timers',
})
export class Timer extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  timerId!: number;

  @Is(IsNumeric)
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  timestamp!: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active!: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  updated_at!: Date;

  @BeforeUpdate
  static updatedAt(instance: Timer) {
    instance.updated_at = new Date();
  }
}
