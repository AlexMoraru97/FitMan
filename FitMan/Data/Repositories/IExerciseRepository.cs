﻿using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories
{
    public interface IExerciseRepository : ICourseManyToManyRepository<ExerciseDTO>
    {
    }
}
