﻿// <auto-generated />
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;

#pragma warning disable 219, 612, 618
#nullable enable

namespace Database
{
    [DbContext(typeof(DusanMalusevDbContext))]
    partial class DusanMalusevDbContextModel : RuntimeModel
    {
        private static DusanMalusevDbContextModel? _instance;
        public static IModel Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new DusanMalusevDbContextModel();
                    _instance.Initialize();
                    _instance.Customize();
                }

                return _instance;
            }
        }

        partial void Initialize();

        partial void Customize();
    }
}
