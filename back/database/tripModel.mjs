function ensurePositive(value, name) {
	if (value < 0)
		throw new Error(`Value: '${name}' should be positive but was ${value}`);
}

export function tripModel(sequelize, DataTypes) {
  const Trip = sequelize.define("Trip", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    head: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    short_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    long_desc: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
		img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
		img_alt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
		beg_date: {
				type: DataTypes.DATE,
				allowNull: false
		},
		end_date: {
				type: DataTypes.DATE,
				allowNull: false,
				validate: {
					isAfterBegin(value) {
						if (value < this.beg_date) {
							throw new Error('End date cannot be earlier than begining.')
						}
					}
				}
			},
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: { validate: (value) => ensurePositive(value, 'price') }
    },
		tickets_left: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { validate: (value) => ensurePositive(value, 'tickets_left') }
		}
  }, 
	{
		tableName: 'trips'
	});

  return Trip;
}
