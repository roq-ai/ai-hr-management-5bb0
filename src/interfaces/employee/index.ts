import { PerformanceEvaluationInterface } from 'interfaces/performance-evaluation';
import { TimeTrackingInterface } from 'interfaces/time-tracking';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  performance_evaluation?: PerformanceEvaluationInterface[];
  time_tracking?: TimeTrackingInterface[];
  organization?: OrganizationInterface;
  _count?: {
    performance_evaluation?: number;
    time_tracking?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  organization_id?: string;
}
