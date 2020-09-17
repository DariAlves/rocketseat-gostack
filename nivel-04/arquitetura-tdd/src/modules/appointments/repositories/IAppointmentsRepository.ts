import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  findByDate(datea: Date): Promise<Appointment | undefined>;
}
