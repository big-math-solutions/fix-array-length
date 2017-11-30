const fixList = function(len = 0) {
    const arraySymbol = Symbol('_array');
    if (!(this instanceof fixList)) return new fixList(len);
    this.length = () => this[arraySymbol].length;
    this._len = len;
    this[arraySymbol] = [];
    this.push = (...items) => {
        for (let i = 0; i < items.length; i++) this._pushOne(items[i]);

        return this;
    };

    this._pushOne = (item) => {
        this[arraySymbol].push(item);

        if (this[arraySymbol].length > this._len) return this[arraySymbol].shift();

        return this;
    };

    this.pull = this[arraySymbol].pop.bind(this[arraySymbol]);

    this.concat = (...arg) => {
        this[arraySymbol] = this[arraySymbol].concat(...arg).slice(-this._len);
        return this;
    };

    this.leftConcat = (...arg) => {
        this[arraySymbol] = arg[0]
            .concat(arg[0], ...arg.slice(1).push(this[arraySymbol]))
            .slice(-this._len);
        return this;
    };

    this.from = (arrayArg) => {
        const array = Array.isArray(arrayArg) ? arrayArg : [ arrayArg ];
        this[arraySymbol] = array.slice(0, len);
        return this;
    };
    this.map = this[arraySymbol].map.bind(this[arraySymbol]);
    this.filter = this[arraySymbol].filter.bind(this[arraySymbol]);
    this.forEach = this[arraySymbol].forEach.bind(this[arraySymbol]);
    this.pop = this[arraySymbol].pop.bind(this[arraySymbol]);
    this.shift = this[arraySymbol].shift.bind(this[arraySymbol]);
    this.unshift = (...items) => {
        const length = this[arraySymbol].length + items.length;

        if (length <= this._len) return this[arraySymbol].unshift(...items);

        for(let i = 0; i < length - this._len; i++) this[arraySymbol].pop();

        return this[arraySymbol].unshift(...items);
    };
    this.get = (i) => this[arraySymbol][i];
    this.set = (i, item) => {
        if (i < this._len) this[arraySymbol][i] = item;
        return this;
    };
    this.getList = () => this[arraySymbol].valueOf();
    this.slice = this[arraySymbol].slice.bind(this[arraySymbol]);
    this.toString = this[arraySymbol].toString.bind(this[arraySymbol]);
    this.sort = this[arraySymbol].sort.bind(this[arraySymbol]);
    this.join = this[arraySymbol].join.bind(this[arraySymbol]);
    this.find = this[arraySymbol].find.bind(this[arraySymbol]);
    this.findIndex = this[arraySymbol].findIndex.bind(this[arraySymbol]);
    this.indexOf = this[arraySymbol].indexOf.bind(this[arraySymbol]);
    this.lastIndexOf = this[arraySymbol].lastIndexOf.bind(this[arraySymbol]);
    this.reduce = this[arraySymbol].reduce.bind(this[arraySymbol]);
    this.reduceRight = this[arraySymbol].reduceRight.bind(this[arraySymbol]);
    this.reverse = this[arraySymbol].reverse.bind(this[arraySymbol]);
    this.valueOf = () => this[arraySymbol].valueOf();
};

module.exports = fixList;
