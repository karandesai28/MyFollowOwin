﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MyFollowOwin.Models
{
    public abstract class CommonProperty
    {        
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}